// this will show a mat card above all componenets 
// thus z -axis = 1
import { useEffect,useState } from 'react';
import '../App.css'

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

function SearchBarResult(props) {
    
    // const [numberOfCards, setnumberOfCards] = useState(0);
    const generateMultipleCards=()=>{
        // setnumberOfCards(this.props);
        console.log("this is searchcard page",props.searchArray);
        
    }

    useEffect(() => {
        generateMultipleCards();
    }, []);
    return (
        

        <ul className='positionForCard'>

        {props.searchArray.slice(0,3).map((cities,index)=>(
            <li key={index}>
                {/* {cities.name} */}
                <Card sx={{ maxWidth: 345,}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={cities.imgUrl}
                    alt="citiimg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {cities.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {cities.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            </li>
        ))}
        </ul>
    )
}

export default SearchBarResult