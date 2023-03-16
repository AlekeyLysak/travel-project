import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './PopularTopicsItem.scss'
import { Component } from 'react'

type Props = {
    title: string
    date: string
    description: string
    image: string
}

class PopularTopicsItem extends Component <Props>{
    render() {
        return (
            <Card variant="outlined" sx={{ maxWidth: 345 }} className="cart">
                <CardContent>
                    <div className="card-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <CardHeader title={this.props.title} subheader={this.props.date} />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className="topics__content"
                    >
                        {this.props.description}
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
}

// const PopularTopicsItem = ({ title, date, description, image }: Props) => {}

export default PopularTopicsItem
