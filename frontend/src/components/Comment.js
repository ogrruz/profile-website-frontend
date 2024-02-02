import React, { useContext, useState, useEffect } from 'react';
import './styling/Comments.css'
import { AuthContext } from './AuthContext';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Comment = ({ userDisplayName, commentText, date, lastModified, commentId }) => {

  const [jwtToken, setJwtToken] = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState(false);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  useEffect ( () => {if(jwtToken) {checkOwner()}} ,[]);

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
          <div className='Comment_controls'>
            <IconButton>
              <EditIcon className='Comment_controls_buttons'/>
            </IconButton>
            <IconButton >
              <DeleteIcon sx={{color: "red"}}/>
            </IconButton>
          </div>
        ) : (
          <div>

          </div>
        )
        }
      </div>

    </div>
  );
};

export default Comment;
