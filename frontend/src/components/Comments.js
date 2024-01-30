import "./styling/Comments.css"
import "./styling/Main.css"
import { Box, Container, Grid, Item, Typography, Button } from "@mui/material";
import Comment from "./Comment";
import PersonIcon from "@mui/icons-material/Person"
import { useEffect, useState } from "react";

const Comments = () => {

    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 


    useEffect(() => {
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

        fetchData();
    }, []);


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
                    </Grid>
                </Grid>
            </div>
            <div className="comments">
                {comments ? 
                    (comments.map((comment, index) => (

                        <div className="Grid_background" style={{marginTop: '1vmax'}}>
                            <Grid container spacing={0} sx={{paddingBottom: "2vmax"}}>
                                <Grid item xs={1} className='' color={"white"}>
                                    <PersonIcon fontSize='large' style={{color: 'white'}}/>
                                </Grid>
                                <Grid item xs={10} className='' color={"white"}>
                                    <Comment
                                        key={index} 
                                        user={comment.userDisplayName} 
                                        content={comment.commentText} 
                                        date={comment.creationDate}
                                        lastModified={comment.lastModifed}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    ))) : (
                        <div/>
                    )   
                }
            </div>
        </Container>
        
    )
}

export default Comments;