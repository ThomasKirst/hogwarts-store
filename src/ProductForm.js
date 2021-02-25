import { useState } from 'react';
import styled from 'styled-components/macro';
import isValidProductEntry from './lib/validateFunctions';

import Tag from './Tag';

export default function ProductForm({ submitFunction }) {
  const initialProduct = {
    name: '',
    price: '',
    currency: '',
    category: '',
    packageSize: '',
    supportContact: '',
    tags: [],
    onSale: false,
  };
  const [product, setProduct] = useState(initialProduct);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setProduct({ ...product, [field.name]: value });
  };

  const addProductTag = (tag) => {
    setProduct({
      ...product,
      tags: [...product.tags, tag],
    });
  };

  const deleteProductTag = (tagToDelete) => {
    const updatedTags = product.tags.filter((tag) => tag !== tagToDelete);
    setProduct({ ...product, tags: updatedTags });
  };

  function submitForm(event) {
    event.preventDefault();
    if (isValidProductEntry(product)) {
      setIsError(false);
      submitFunction(product);
      setProduct(initialProduct);
    } else {
      setIsError(true);
    }
  }

  return (
    <Form onSubmit={submitForm}>
      <h2>Add new Product</h2>
      {isError && <Error>There is an error in your form!</Error>}
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Pricing>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="currency">Currency</label>
            <input
              type="text"
              name="currency"
              value={product.currency}
              onChange={handleChange}
            />
          </div>
        </Pricing>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <br />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="">--Please select a category--</option>
          <option value="sports">Sports</option>
          <option value="home">Home</option>
          <option value="school">School supplies</option>
          <option value="wear">Wear</option>
          <option value="sweets">Sweets</option>
        </select>
      </div>
      <div>
        Package size
        <br />
        <label>
          <input
            type="radio"
            name="packageSize"
            value="S"
            checked={product.packageSize === 'S'}
            onChange={handleChange}
          />
          S
        </label>
        <label>
          <input
            type="radio"
            name="packageSize"
            value="M"
            checked={product.packageSize === 'M'}
            onChange={handleChange}
          />
          M
        </label>
        <label>
          <input
            type="radio"
            name="packageSize"
            value="L"
            checked={product.packageSize === 'L'}
            onChange={handleChange}
          />
          L
        </label>
      </div>
      <div>
        <label htmlFor="name">Support contact(email)</label>
        <input
          type="email"
          name="supportContact"
          value={product.supportContact}
          onChange={handleChange}
        />
      </div>
      <div>
        <Tag
          headline="Product Tags"
          onCreateTag={addProductTag}
          onDeleteTag={deleteProductTag}
          tags={product.tags}
        />
      </div>
      <label>
        <input
          type="checkbox"
          name="onSale"
          checked={product.onSale}
          onChange={handleChange}
        />
        On sale
      </label>
      <ButtonBar>
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </ButtonBar>
    </Form>
  );
}

const Error = styled.div`
  border: 1px solid deeppink;
  color: deeppink;
  padding: 1rem;
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    border: none;
    padding: 0.3rem 2rem;
    width: 48%;
  }
  button[type='submit'] {
    background: #bad6e5;
  }
`;

const Pricing = styled.div`
  display: flex;
  div {
    margin-right: 1rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 500px;
  padding: 0.5rem 1rem;
  margin: 0 auto;

  label {
    padding-bottom: 0.5rem;
  }

  input[type='number'],
  input[type='email'],
  input[type='text'] {
    display: block;
    margin-top: 0.3rem;
    padding: 0.3rem;
    width: 100%;
    border-radius: 3px;
  }

  select {
    border-radius: 3px;
    padding: 0.3rem;
  }
`;
