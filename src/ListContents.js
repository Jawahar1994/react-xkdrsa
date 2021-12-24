import React from 'react';
import './ListContents.css';

export default function ListContents(props) {
  const contents = props.contents;

  const listContents = contents.map((content) => {
    return (
      <div className="content-info" key={content.id}>
        <div className="content-image">
          <img
            src="https://stackblitz.com/files/react-xkdrsa/github/Jawahar1994/react-xkdrsa/master/5907.jpg"
            alt={content.name}
          />
        </div>
        <div className="content-caption">
          <h3>{content.name}</h3>
          <p>{content.email}</p>
        </div>
        <div className="content-button">
          <button
            onClick={() => {
              props.removeClickHandler(content.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h3>List Content </h3>
      <hr />
      <div className="content-list">{listContents}</div>
    </>
  );
}
