import React from 'react';
import './styling/Comments.css'

const Comment = ({ user, content, date, lastModified }) => {
  return (
    <div className="">
      <div className="Comment_Header">
        <span style={{color: "#007bff"}}>{user}</span> 
        <span>Date created: {date}</span>
      </div>
      <div className="Comment-content">{content}</div>
      <div className="Comment_last_modified" >Last modified: {lastModified}</div>
    </div>
  );
};

export default Comment;
