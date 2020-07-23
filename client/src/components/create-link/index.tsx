import React, { useState, useEffect, useContext, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LinkContext } from '~/state/context/link';
import useForm from '~/hooks/useForm';
import Loading from '~/components/loading';
import Error from '~/components/error';
import Toast from '~/components/toast';
import { Modal } from '~/styles/components/modals';
import Form from '~/components/form';
import { getCategoryName, getCategoryId } from '~/utils/routing';
import { CREATE_LINK } from '~/components/create-link/schema';
import { GET_LINKS_BY_CATEGORY } from '~/views/category/schema';

const CreateLink: FC = () => {
  const [vis, setVis] = useState(true);
  const { pathname } = useLocation();
  const { visible, closeLinkModal } = useContext(LinkContext);
  const { values, handleChange, handleSubmit, resetValues } = useForm(addLink, { link: '' });

  const [createLink, { loading, error }] = useMutation(CREATE_LINK, {
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception);
    },
    variables: { link: values.link, category: getCategoryName(pathname) },
    refetchQueries: [{ query: GET_LINKS_BY_CATEGORY, variables: { _id: getCategoryId(pathname) } }],
  });

  useEffect(() => {
    setVis(true);
    setTimeout(() => {
      setVis(false);
    }, 5000);
    return () => {
      setVis(false);
    };
  }, [loading, error]);

  if (error && vis) {
    return (
      <Toast>
        <Error error={error} type="link" />
      </Toast>
    );
  }

  if (loading) return <Loading />;

  function addLink() {
    createLink();
    closeLinkModal();
  }

  return (
    <Modal>
      {visible && (
        <Form
          closeModal={closeLinkModal}
          title="Add a link"
          submit={handleSubmit}
          name="link"
          value={values.link}
          change={handleChange}
          reset={resetValues}
          buttonText="Add"
        />
      )}
    </Modal>
  );
};

export default CreateLink;
