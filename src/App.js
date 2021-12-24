import React, { useState } from 'react';
import './style.css';
import AddListContent from './AddListContent';
import ListContents from './ListContents';

export default function App() {
  const [contents, setContacts] = useState([]);
  const [counter, SetCounter] = useState(0);

  const addContentHandler = (content) => {
    setContacts([...contents, { id: counter, ...content }]);
    SetCounter(counter + 1);
  };

  const contentRemoveHandler = (id) => {
    const remaining_contents = contents.filter((content) => {
      return content.id != id;
    });

    setContacts(remaining_contents);
  };

  return (
    <div className="content-wrapper">
      <AddListContent addContentHandler={addContentHandler} />
      <ListContents
        contents={contents}
        removeClickHandler={contentRemoveHandler}
      />
    </div>
  );
}
