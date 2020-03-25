import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import useForm from '~/hooks/useForm';
import { CREATE_CATEGORY } from '~/components/create-category/schema';
import { GET_ALL_CATEGORIES } from '~/views/homepage/schema';

const CreateCategory = () => {
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

  if (loading) return <p>LOADING...</p>;

  function addCategory() {
    createCategory();
  }

  return (
    <div>
      <h1>Create CAT!</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" name="category" value={category} onChange={handleChange} />
        <button>X</button>
      </form>
    </div>
  );
};

export default CreateCategory;
