import React, { useContext, useState, useEffect } from 'react';
import './styling/Comments.css'
import { AuthContext } from './AuthContext';
import { Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

const Comment = ({ userDisplayName, commentText, date, lastModified, commentId }) => {

  const [jwtToken, setJwtToken] = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);
  const [newCommentText, setNewCommentText] = useState(commentText);

  const navigate = useNavigate();

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  useEffect ( () => {if(jwtToken) {checkOwner()}} ,[]);

  const handleNewCommentTextChange = (event) => {
    setNewCommentText(event.target.value);
  }

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
          console.log('INCORRECT DELETE REQUEST')
      }
    } catch (error) {
        console.error('ERROR DURING DELETE REQUEST PROCESS: ', error);
    }

  }

  const editComment = async () => {

    console.log("new comment text const: " + newCommentText)

    try {
      const response = await fetch ('http://localhost:8080/api/comments/edit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + jwtToken
          },
          body: JSON.stringify({
              commentText: newCommentText,
              userDisplayName,
              commentId
          })
      });

      if(response.ok == true) {
        navigate("/");
        navigate("/Comments")
      } else {
          console.log('INCORRECT EDIT REQUEST')
      }
    } catch (error) {
        console.error('ERROR DURING EDIT REQUEST PROCESS: ', error);
    }

  }


  return (
    <div className="">
      <div className="Comment_Header">
        <div>
          <span className='Comment_username' >{userDisplayName}</span> 
          <span className='Comment_date'>{formatDate(date)}</span>
          {date == lastModified ? ( <div></div>):(<span className='Comment_edited'>Edited: {formatDate(lastModified)}</span>)}
        </div>
        
        <div className='Comment_controls'>
          {commentAuthor && (
            <>
              <IconButton size="small" onClick={() => setEnableEdit(!enableEdit)}>
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
      <div className='Comment-content'>
          {enableEdit ? (
            <div>
              <TextField
                className='custom-textfield'
                multiline
                style={{ color: "#007bff", borderColor: "#007bff"}}
                variant="outlined"
                InputProps={{ style: { color: 'white' } }}
                sx={{ width: '100%' }}
                value={newCommentText}
                onChange={handleNewCommentTextChange}
              />
              <>
                <IconButton size="small" onClick={() => {editComment()}}>
                  <CheckIcon className='Comment_controls_buttons' sx={{color: "green"}}/>
                </IconButton>
                <IconButton size="small" onClick={() => setEnableEdit(!enableEdit)}>
                  <ClearIcon sx={{color: "red"}}/>
                </IconButton>
              </>
            </div>
          ) : (
            <div className="Comment-content">{commentText}</div>
          )}
      </div>


    </div>
  );
};

export default Comment;
