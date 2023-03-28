import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import './AdventurePage.scss'
import { Button, CardActions } from '@mui/material'
import { Link} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { addLike, removeLike } from 'redux/likeReducer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {
    id: number
    title: string
    date: string
    description: string
    image: string
    category: string
}

const AdventurePageItem = ({
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
                    backgroundColor: 'green',
                    width: '80px',
                    height: '27px',
                    marginRight: '20px',
                    borderRadius: '7px',
                }}
            >
                {category}
            </Typography>

            <Button
                className="like"
                onClick={() =>
                    isLiked ? dispatch(removeLike(id)) : dispatch(addLike(id))
                }
            >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>

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
                <Link to={`/${category}/${id}`} className="info-page">
                    <Button variant="outlined" size="small" className="btn-see">
                        Learn more...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default AdventurePageItem
