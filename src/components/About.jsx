import { Twitter } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useEffect } from "react";


function About() {
    useEffect(() => {
        console.log("hello in about");
    }, []);
    return (
        <Box sx={{ color: "white" }}>
            <Box className="leftSideText" sx={{ fontSize: '3rem' }}>ABOUT US</Box>
            <Box className="leftSideText" sx={{ background: 'rgba(22, 25, 22, 0.1)' }}>Welcome to Our Company! Weare a team of passionate individuals dedicatedtoproviding excellent serviceslproååcéstpou/custorrief mission0st&Q
                provide the best experience for people travelin4to c!iffersnt gest[nations around thewor\c€
                Our values include integrity, innovation, customer satisfaction, and teamwork. W belieVein putting ourcustomers firstan worki gtogethéÅÖachTeve
                our goals.
                Feel free to explore our website to learn more about what we Offer!
            </Box>
            <Grid container spacing={6} sx={{ marginTop: '4rem' }}>
                {/* Social Media Icons */}
                <Grid xs={1}>
                    <Grid xs={12}><Twitter /></Grid>
                    <Grid xs={12}><FacebookIcon /></Grid>
                    <Grid xs={12}><InstagramIcon /></Grid>
                    <Grid xs={12}><YouTubeIcon /></Grid>
                </Grid>

                {/* Section Title */}
                <Grid xs={5} sx={{ fontSize: '3rem' }}>Our Team</Grid>

                {/* Team Member Boxes */}
                <Grid xs={3} container spacing={1}>
                    {/* Row 1 */}
                    <Grid size={1} alignItems={"center"}>
                        <PersonIcon />
                    </Grid>
                    <Grid size={6} alignItems={"center"} >
                        <p>Celina iKomas</p>
                    </Grid>
                    {/* Row 2 */}
                    <Grid size={12}>
                        <Typography>Celina is responsible for....</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Button variant="contained">CEO</Button>
                    </Grid>
                </Grid>
                {/* Team Member Boxes */}
                <Grid xs={3} container spacing={1}>
                    {/* Row 1 */}
                    <Grid size={1} alignItems={"center"}>
                        <PersonIcon />
                    </Grid>
                    <Grid size={6} alignItems={"center"} >
                        <p>Celina iKomas</p>
                    </Grid>
                    {/* Row 2 */}
                    <Grid size={12}>
                        <Typography>Celina is responsible for....</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Button variant="contained">Team Lead</Button>
                    </Grid>
                </Grid>



            </Grid>

        </Box>
    )
}

export default About