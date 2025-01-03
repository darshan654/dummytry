import { Box, Button, FormHelperText, Grid2, Input, InputLabel } from "@mui/material";
import '../App.css'
import { Twitter } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormControl from '@mui/material/FormControl';

function Contact() {
    return (
        <div>
            <Box sx={{ color: "white", marginTop: '10rem' }}>
                <Grid2 container spacing={2}>
                    {/* Social Media Icons */}
                    <Grid2 xs={1}>
                        <Grid2 xs={12}><Twitter /></Grid2>
                        <Grid2 xs={12}><FacebookIcon /></Grid2>
                        <Grid2 xs={12}><InstagramIcon /></Grid2>
                        <Grid2 xs={12}><YouTubeIcon /></Grid2>
                    </Grid2>
                    {/* title text */}
                    <Grid2 size={5} className="leftSideText" sx={{ fontSize: '3rem' }}>CONTACT US
                    </Grid2>

                    {/* form */}
                    <Grid2  size={6} sx={{display:"flex" , flexDirection:'column'}}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Message  </InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
                        </FormControl>
                        <Button variant="contained">Submit</Button>
                    </Grid2>
                </Grid2>
            </Box>
        </div>
    )
}

export default Contact