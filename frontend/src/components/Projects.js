import { Grid, Container, Typography } from "@mui/material"
import "./styling/Projects.css"

const Projects = () => {



    return (
        <Container>
            <div className="Grid_background">
                <Grid container spacing={0} sx={{paddingBottom: "1vmax"}}>
                    <Grid item xs={10} className='' color={"white"} paddingLeft={'5vmax'}>
                        < Typography className="Comments_welcome_text_2" color={"white"}>
                            <h2 style={{color: '#007bff'}}>
                                Projects
                            </h2>
                            <h4> This page looks to outline my biggest projects to date. Please feel free to click on each one to learn more!</h4>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className="Projects-padding">

            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4} color={"white"} className="Grid_background">
                        TEXT
                    </Grid>
                    <Grid item xs={4} color={"white"} className="Grid_background">
                        TEXT
                    </Grid>
                    <Grid item xs={4} color={"white"} className="Grid_background">
                        TEXT
                    </Grid>
                </Grid>
            </div>
        </Container>

    )
}

export default Projects;