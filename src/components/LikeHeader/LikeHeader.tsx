import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import { useAppSelector } from 'redux/hooks'
import cardsArray, { Cart } from 'utils/cardsArray'
import './LikeHeader.scss'

type Props = {}

const LikeHeader = (props: Props) => {
    const productsLikeState = useAppSelector((state) => state.productsLikeState)

    const likedArticles = cardsArray.filter(
        ({ id }: Cart) => productsLikeState[id]
    )

    const favoritesCount = likedArticles.length

    return (
        <div>
            <FavoriteBorderRoundedIcon
                sx={{
                    color: 'red',
                    position: 'relative',
                    left: '10px',
                }}
            />
            <div className="zero">{favoritesCount}</div>
        </div>
    )
}

export default LikeHeader
