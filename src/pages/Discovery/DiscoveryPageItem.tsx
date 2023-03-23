import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import { Component } from 'react'
import { Button, CardActions } from '@mui/material'

type Props = {
    title: string
    date: string
    description: string
    image: string
    category: string
}

class DiscoveryPageItem extends Component<Props> {
    render() {
        const { title, date, description, image, category } = this.props
        return (
            <Card variant="outlined" sx={{ maxWidth: 345 }} className="cart">
                <Typography
                    className="category"
                    sx={{
                        backgroundColor: 'blue',
                        width: '80px',
                        height: '27px',
                        marginRight: '20px',
                        borderRadius: '7px',
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
                    <FavoriteBorderRoundedIcon className="red-like" />
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
}

export default DiscoveryPageItem
