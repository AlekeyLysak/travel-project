import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import './PopularTopicsItem.scss'
import { Button, CardActions } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { addLike, removeLike } from 'redux/likeReducer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {
    id:number
    title: string
    date: string
    description: string
    image: string
    category: string
}

const PopularTopicsItem = ({
    id,
    title,
    date,
    description,
    image,
    category,
}: Props) => {
    
  const isLiked = useAppSelector((state) => state.productsLikeState[id])
  const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" sx={{ maxWidth: 345 }} className="cart">
            <Typography
                className="category"
                sx={{
                    backgroundColor: 'orange',
                    width: '80px',
                    height:'27px',
                    marginRight:'20px',
                    borderRadius:'7px'
                }}
            >
                {category}
            </Typography>
            <IconButton
                sx={{
                    ml: 'auto',
                    alignSelf: 'flex-end',
                    bottom: '0',
                }}
            >
                <Button className='like'onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
            </IconButton>
            <CardContent>
                <div className="card-image">
                    <img src={image} alt="" />
                </div>

                <CardHeader title={title} subheader={date} />
                <Typography
                    variant="body2"
                    color="text.secondary"
                    className="topics__content"
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined" size="small" className="btn-see">
                    See more...
                </Button>
            </CardActions>
        </Card>
    )
}

export default PopularTopicsItem
