import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import './LikeHeader.scss'

type Props = {}

const LikeHeader = (props: Props) => {
    return (
        <div>
            <FavoriteBorderRoundedIcon
                sx={{
                    marginLeft: '20px',
                }}
            />
            <div className='zero'>0</div>
        </div>
    )
}

export default LikeHeader
