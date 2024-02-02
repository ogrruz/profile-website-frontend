import React, { useContext, useState, useEffect } from 'react';
import './styling/Comments.css'
import { AuthContext } from './AuthContext';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const Comment = ({ userDisplayName, commentText, date, lastModified, commentId }) => {

  const [jwtToken, setJwtToken] = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState(false);

  const navigate = useNavigate();

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

  const deleteComment = async () => {

    try {
      const response = await fetch ('http://localhost:8080/api/comments/delete', {
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
        navigate("/");
        navigate("/Comments")
      } else {
          console.log('INCORRECT REQUEST')
      }
    } catch (error) {
        console.error('ERROR DURING REQUEST PROCESS: ', error);
    }

  }


  return (
    <div className="">
      <div className="Comment_Header">
        <div>
          <span className='Comment_username' >{userDisplayName}</span> 
          <span className='Comment_date'>{formatDate(date)}</span>
        </div>
        
        <div className='Comment_controls'>
          {commentAuthor && (
            <>
              <IconButton size="small">
                <EditIcon className='Comment_controls_buttons' />
              </IconButton>
              <IconButton size="small" onClick={deleteComment}>
                <DeleteIcon sx={{color: "red"}}/>
              </IconButton>
            </>
          )
          }
        </div>
      </div>
      <div className="Comment-content">{commentText}</div>

      

    </div>
  );
};

export default Comment;
