import React from 'react';
import './styling/Comments.css'

const Comment = ({ user, content, date }) => {
  return (
    <div className="">
      <div className="Comment_Header">
        <span className="comment-author" style={{color: "#007bff"}}>{user}</span> 
        <span className="comment-date">{date}</span>
      </div>
      <div className="Comment-content">{content}</div>
    </div>
  );
};

export default Comment;
