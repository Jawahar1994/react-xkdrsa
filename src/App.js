import React, { useState } from 'react';
import './style.css';
import AddListContent from './AddListContent';
import ListContents from './ListContents';

export default function App() {
  const [contents, setContacts] = useState([]);

  const addContentHandler = (content) => {
    setContacts([...contents, content]);
  };

  console.log(contents);

  return (
    <div className="content-wrapper">
      <AddListContent addContentHandler={addContentHandler} />
      <ListContents contents={contents} />
    </div>
  );
}
