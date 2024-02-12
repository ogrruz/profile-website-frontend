import "./styling/Comments.css"
import "./styling/Main.css"
import { Box, Container, Grid, Item, Typography, Button, TextField } from "@mui/material";
import Comment from "./Comment";
import PersonIcon from "@mui/icons-material/Person"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'

const Comments = () => {

    const [jwtToken, setJwtToken] = useContext(AuthContext);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [commentText, setCommentText] = useState("")
    
    const handleCommentTextChange = (event) => {
        setCommentText(event.target.value);
    }

    const navigate = useNavigate();

    const postComment= async () => {
        try {
            const response = await fetch ('http://localhost:8080/api/comments/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwtToken
                },
                body: JSON.stringify({
                    commentText
                })
            });

            if(response.ok) {
                navigate("/");
                navigate("/Comments")

            } else {
                console.error('POST REQUEST FAILED')
            }
        } catch (error) {
            console.error('ERROR DURING POST REQUEST: ', error);
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/comments/retrieve");

            if (!response.ok) {
                throw new Error('Error retrieving comments from backend');
            }

            const data = await response.json();
            setComments(data);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []); //[reloadData]


    return (
        <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid item xs={8} className='' color={"white"} paddingLeft={'5vmax'}>
                        < Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff'}}>
                                Comments
                            </h2>
                            <h4>If you have a comment or suggestion with regards the UI / UX of the site and / or the code behind it please leave them here!</h4>
                        </Typography>
                        <div>
                            {jwtToken == null ? (
                                <div>
                                    < Typography className="Comments_welcome_text_2" color={"white"}>
                                        <h4> ! You must be logged in to leave a comment !</h4>
                                    </Typography>
                                    <Button variant="contained" sx={{marginRight: "1vmax"}} size='large' onClick={() => navigate('/Login')}>
                                    Login
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    < Typography className="Comments_welcome_text_2" color={"white"}>
                                        <h4> Post a comment</h4>
                                    </Typography>
                                    <div className="Comment_textfield">
                                        <TextField
                                            className='custom-textfield'
                                            placeholder="Comment text here..."
                                            multiline
                                            rows={4}
                                            maxRows={4}
                                            style={{ color: "#007bff", borderColor: "#007bff"}}
                                            variant="outlined"
                                            InputProps={{ style: { color: 'white' } }}
                                            sx={{ width: '100%' }}
                                            value={commentText}
                                            onChange={handleCommentTextChange}
                                        />
                                    </div>
                                    <div>
                                        <Button variant="contained" sx={{marginRight: "1vmax"}} size='large' onClick={() => {postComment(); setCommentText("")}}>
                                            Post
                                        </Button>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="comments">
                {comments ? 
                    (comments
                        .slice() // Create a copy of the comments array
                        .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate)) // Sort comments based on creationDate
                        .map((comment, index) => (
                            <div className="Grid_background" style={{marginTop: '1vmax'}} key={index}>
                                <Grid container spacing={0} sx={{paddingBottom: "2vmax"}}>
                                    <Grid item xs={1} className='' color={"white"}>
                                        <PersonIcon fontSize='large' style={{color: 'white'}}/>
                                    </Grid>
                                    <Grid item xs={10} className='' color={"white"}>
                                        <Comment
                                            userDisplayName={comment.userDisplayName} 
                                            commentText={comment.commentText} 
                                            date={comment.creationDate}
                                            lastModified={comment.lastModifed}
                                            commentId={comment.commentId}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        ))
                    ) : (
                        <div/>
                    )      
                }
            </div>
        </Container>
        
    )
}

export default Comments;