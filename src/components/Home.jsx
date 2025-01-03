import { Button, Grid2, } from "@mui/material";
import { useEffect } from "react";
import '../App.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Twitter } from "@mui/icons-material";

function Home() {

    useEffect(() => {
        console.log("hello in home");
    }, []);
    return (
        <>
            <Grid2 container spacing={2} sx={{ color: "white" }}>
                {/*  bold text */}
                <Grid2 size={12} className="leftSideText">
                    <h1 >EXPLORE</h1>
                    <h1 >DREAM</h1>
                    <h1 >DESTINATION</h1>
                </Grid2>
                <Grid2 size={.75}>
                    <Grid2 size={12}><Twitter /></Grid2>
                    <Grid2 size={12}><FacebookIcon /></Grid2>
                    <Grid2 size={12}><InstagramIcon /></Grid2>
                    <Grid2 size={12}><YouTubeIcon /></Grid2>

                </Grid2>
                <Grid2 size={4}>
                    <p>It encourages exploration of unfamiliar
                        territories, embracing diverse cultures and
                        landscapes, while pursuing thedekired_!
                        destination that captivates the heart and
                        ignites a sense of wonder.</p>
                </Grid2>
                <Grid2 size={8}>
                    <Button sx={{ marginLeft: '6rem' }} variant="contained">Book Now </Button>
                </Grid2>
            </Grid2>

        </>
    )
}

export default Home