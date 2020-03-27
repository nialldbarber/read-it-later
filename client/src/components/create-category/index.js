import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import SVG from 'react-inlinesvg';
import { CategoryContext } from '~/state/context/category';
import useForm from '~/hooks/useForm';
import Loading from '~/components/loading';
import { Modal, Exit } from '~/styles/components/modals';
import exit from '~/assets/exit.svg';
import { CREATE_CATEGORY } from '~/components/create-category/schema';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

const CreateCategory = () => {
  const { visible, closeCategoryModal } = useContext(CategoryContext);
  const { values, handleChange, handleSubmit } = useForm(addCategory, {
    category: '',
  });

  const { category } = values;

  const [createCategory, { loading, error }] = useMutation(CREATE_CATEGORY, {
    onError(err) {
      console.log(err);
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
      <div className="inner">
        <Exit>
          <SVG src={exit} alt="Exit" aria-label="Exit" onClick={closeCategoryModal} />
        </Exit>
        <h1>Create a category</h1>
        <form onSubmit={handleSubmit} noValidate>
          <input type="text" name="category" value={category} onChange={handleChange} />
          <button>Add</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateCategory;
