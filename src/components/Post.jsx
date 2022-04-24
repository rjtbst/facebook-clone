import React from 'react'
import  Avatar from '@mui/material/Avatar';
import  Card from '@mui/material/Card';
import  CardActions from '@mui/material/CardActions';
import  CardContent from '@mui/material/CardContent';
import  CardHeader from '@mui/material/CardHeader';
import  Typography from '@mui/material/Typography';
import  IconButton from '@mui/material/IconButton';
import   CardMedia from '@mui/material/CardMedia';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  FavoriteIcon from '@mui/icons-material/Favorite';
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import image1 from '../assets/image2.jpg';
  

const Post = () => {
  return (
    <div>
<Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="rajat and shubham"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
      

        image={image1}
        alt="mountain"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          to travel is to live.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorderIcon/>}  checkedIcon={<FavoriteIcon sx={{color:"red"}} />}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </Card>

    </div>
  )
}

export default Post