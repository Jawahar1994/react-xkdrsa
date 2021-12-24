import React from 'react';
import user from './user.jpg';

export default function ListContents(props) {
  const contents = props.contents;

  const listContents = content.map((content) => {
    return (
      <div className="content-info">
        <div className="content-image">
          <img src={user} alt={content.name} />
        </div>
        <div className="content-caption">
          <h3>{content.name}</h3>
          <p>{content.email}</p>
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
