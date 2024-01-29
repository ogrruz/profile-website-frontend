import "./styling/Comments.css"
import "./styling/Main.css"
import { Box, Container, Grid, Item, Typography, Button } from "@mui/material";
import Comment from "./Comment";
import PersonIcon from "@mui/icons-material/Person"

const Comments = () => {

    //populate with data points from the comments table
    const comments = [ 
        {
            user: "Test User",
            content: "this is a test comment",
            date: "25/01/2024"
        },
        {
            user: "Test User2",
            content: "this is a test comment2",
            date: "25/01/2024"
        },
        {
            user: "Test User3",
            content: "this is a test comment3",
            date: "29/01/2024"
        },
        {
            user: "Test User4",
            content: "this is a test comment4",
            date: "29/01/2024"
        },
        {
            user: "Test User5",
            content: "this is a test comment5",
            date: "29/01/2024"
        },
        {
            user: "Test User6",
            content: "this is a test comment6",
            date: "29/01/2024"
        },
        {
            user: "Test User7",
            content: "this is a test comment7",
            date: "29/01/2024"
        }
    ];


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
                {comments.map((comment, index) => (

                    <div className="Grid_background" style={{marginTop: '1vmax'}}>
                        <Grid container spacing={0} sx={{paddingBottom: "2vmax"}}>
                            <Grid item xs={1} className='' color={"white"}>
                                <PersonIcon fontSize='large' style={{color: 'white'}}/>
                            </Grid>
                            <Grid item xs={8} className='' color={"white"}>
                                <Comment
                                    key={index} 
                                    user={comment.user} 
                                    content={comment.content} 
                                    date={comment.date} 
                                />
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </div>
        </Container>
        
    )
}

export default Comments;