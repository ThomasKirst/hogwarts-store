import { useState } from 'react';

import styled from 'styled-components';

export default function Tag({ headline, onCreateTag, onDeleteTag, tags }) {
  const [value, setValue] = useState('');
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1);

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onCreateTag(value.toUpperCase());
      setValue('');
    }
    if (event.key === 'Backspace') {
      if (selectedTagIndex >= 0) {
        onDeleteTag(tags[selectedTagIndex]);
      } else {
        onDeleteTag(tags[tags.length - 1]);
      }
      setSelectedTagIndex(-1);
    }
    if (event.key === 'ArrowLeft') {
      if (selectedTagIndex <= 0) {
        setSelectedTagIndex(tags.length - 1);
      } else {
        setSelectedTagIndex(selectedTagIndex - 1);
      }
    }
    if (event.key === 'ArrowRight') {
      if (selectedTagIndex === tags.length - 1) {
        setSelectedTagIndex(0);
      } else {
        setSelectedTagIndex(selectedTagIndex + 1);
      }
    }
  };
  return (
    <>
      <label htmlFor="tags">{headline}</label>
      <TagsList>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              background: selectedTagIndex === index ? 'aqua' : 'deeppink',
            }}
          >
            {tag} <i onClick={() => onDeleteTag(tag)}>&times;</i>
          </span>
        ))}
        <input
          type="text"
          name="tags"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </TagsList>
    </>
  );
}

const TagsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  background: white;
  border-radius: 3px;
  padding: 0.3rem;

  input[type='text'] {
    border: none;
    display: inline;
    width: 30%;
  }
  input[type='text']:focus {
    border-radius: 0;
    border-bottom: 2px solid deeppink;
    outline: none;
  }

  span {
    background: deeppink;
    margin-bottom: 0.4rem;
    margin-right: 0.8rem;
    padding: 0.3rem;
    border-radius: 5px;

    i {
      cursor: pointer;
    }
  }
`;
