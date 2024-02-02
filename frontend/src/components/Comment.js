import React, { useContext, useState, useEffect } from 'react';
import './styling/Comments.css'
import { AuthContext } from './AuthContext';

const Comment = ({ userDisplayName, commentText, date, lastModified, commentId }) => {

  const [jwtToken, setJwtToken] = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState(false);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  useEffect ( () => {

    checkOwner();

  },[])

  const checkOwner = async () => {

    try {
      const response = await fetch ('http://localhost:8080/api/comments/checkOwner', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + jwtToken
          },
          body: JSON.stringify({
              commentText,
              userDisplayName,
              commentId
          })
      });

      if(response.ok == true) {
        setCommentAuthor(true);
      } else {
          console.log('NOT AUTHOR')
      }
    } catch (error) {
        console.error('ERROR DURING OWNER CHECK PROCESS: ', error);
      }
  }


  return (
    <div className="">
      <div className="Comment_Header">
        <span style={{color: "#007bff"}}>{userDisplayName}</span> 
        <span>Date created: {formatDate(date)}</span>
      </div>
      <div className="Comment-content">{commentText}</div>
      <div className="Comment_last_modified" >Last modified: {formatDate(lastModified)}</div>

      <div>
        {commentAuthor == true ? (
          <h2>
            HELO
          </h2>
        ) : (
          <div/>
        )
        }
      </div>

    </div>
  );
};

export default Comment;
