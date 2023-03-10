import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './PopularTopicsItem.scss'

type Props = {
   title: string
   date: string
   description: string
}

const PopularTopicsItem = ({
   title,
   date,
   description,
}: Props) => {

return (
   <Card variant="outlined" sx={{ maxWidth: 345 }} className="cart">
       <CardMedia className='card-image'
        component="img"
        height="194"
        image='https://r4.wallpaperflare.com/wallpaper/840/249/299/alberta-canada-moraine-lake-4k-wallpaper-d7ff75fee74a63b077a0065fb6db7c98.jpg'
        alt="Paella dish"
      />
      <CardHeader
         title={title}
         subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="topics__content">
        {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
   </Card>
  )
}

export default PopularTopicsItem