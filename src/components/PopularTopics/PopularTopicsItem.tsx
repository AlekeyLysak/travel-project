import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './PopularTopics.scss'

interface ExpandMoreProps extends IconButtonProps {
   expand: boolean;
 }
 
 const ExpandMore = styled((props: ExpandMoreProps) => {
   const { expand, ...other } = props;
   return <IconButton {...other} />;
 })(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
     duration: theme.transitions.duration.shortest,
   }),
 }));
 
 export default function PopularTopicsItem() {
   const [expanded, setExpanded] = React.useState(false);
 
   const handleExpandClick = () => {
     setExpanded(!expanded);
   };
   return (
     
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
       
      <CardMedia
        component="img"
        height="194"
        image='https://r4.wallpaperflare.com/wallpaper/840/249/299/alberta-canada-moraine-lake-4k-wallpaper-d7ff75fee74a63b077a0065fb6db7c98.jpg'
        alt="Paella dish"
      />
      
      <CardHeader 
         title="Moraine lake, Canada"
         subheader="September 14, 2016"
         className='topics__text'
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="topics__content">
        Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada.
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className="topics__content">...continuation about the place</Typography>
            <Typography paragraph className="topics__content">
            Moraine Lake is situated in the Valley of the Ten Peaks, which is a group of ten peaks that surround the lake, including Mount Fay, Mount Babel, and Mount Deltaform. The lake is about 14 kilometers southeast of the town of Lake Louise and is fed by runoff from the surrounding mountains, which gives it its distinctive blue-green color.
          </Typography>
          <Typography paragraph className="topics__content">
          Visitors to Moraine Lake can take in the stunning scenery by hiking along the various trails in the area, renting a canoe or kayak to explore the lake, or simply admiring the view from the shore. The lake is accessible from mid-May to mid-October, and during this time visitors can also enjoy guided tours, interpretive programs, and other activities offered by the park.
          </Typography>
         </CardContent>
      </Collapse>
    </Card>
  )
}
