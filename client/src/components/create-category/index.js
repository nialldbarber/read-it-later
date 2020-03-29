import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { CategoryContext } from '~/state/context/category';
import useForm from '~/hooks/useForm';
import Loading from '~/components/loading';
import { Modal } from '~/styles/components/modals';
import Form from '~/components/form';
import { CREATE_CATEGORY } from '~/components/create-category/schema';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

const CreateCategory = () => {
  const { push } = useHistory();
  const { visible, closeCategoryModal } = useContext(CategoryContext);
  const {
    values: { category },
    handleChange,
    handleSubmit,
  } = useForm(addCategory, '');

  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY, {
    onError(err) {
      console.log(err);
    },
    update() {
      push('/');
    },
    variables: { category },
    refetchQueries: [{ query: GET_ALL_CATEGORIES }],
  });

  if (error) {
    console.log(error);
    return <p>ERROR</p>;
  }

  if (loading) return <Loading />;

  function addCategory() {
    createCategory();
    closeCategoryModal();
  }

  return (
    <Modal style={{ display: visible ? 'block' : 'none' }}>
      <Form
        closeModal={closeCategoryModal}
        title="Create a category"
        submit={handleSubmit}
        name="category"
        value={category}
        change={handleChange}
        buttonText="Add"
      />
    </Modal>
  );
};

export default CreateCategory;
