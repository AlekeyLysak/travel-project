import { CardMedia, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Cart } from 'utils/cardsArray'
import Reviews from 'components/Reviews/Reviews'

const ArticleListItem = ({
    image,
    title,
    description,
    picture,
    desc,
}: Cart) => {
    return (
        <div className="background">
            <img className="landing-image" src={image} alt="" />
            <Typography>
                <Container>
                    <div className="product-border"></div>
                    <div className="product-title">{title}</div>
                    <h3 className="product-subtitle">{desc[0]}</h3>
                    <h3 className="date">{desc[1]}</h3>
                    <p className="description">{desc[2]}</p>
                    <p className="description">{desc[3]}</p>
                    <CardMedia>
                        <img
                            className="archival-photo"
                            src={picture[0]}
                            alt=""
                        />
                    </CardMedia>
                    <p className="description">{desc[4]}</p>
                    <p className="description">{desc[5]}</p>
                    <CardMedia>
                        <img
                            className="archival-photo1"
                            src={picture[1]}
                            alt=""
                        />
                        <img
                            className="archival-photo2"
                            src={picture[2]}
                            alt=""
                        />
                    </CardMedia>
                    <h3 className="desc-title">Description</h3>
                    <p className="description">{desc[6]}</p>
                    <p className="description">{desc[7]}</p>
                    <CardMedia>
                        <img
                            className="archival-photo1"
                            src={picture[3]}
                            alt=""
                        />
                        <img
                            className="archival-photo2"
                            src={picture[4]}
                            alt=""
                        />
                    </CardMedia>
                    <p className="description">{desc[8]}</p>
                    <p className="description-bottom">{desc[9]}</p>
                    <div className="product-border1"></div>
                </Container>
                <Reviews />
            </Typography>
        </div>
    )
}

export default ArticleListItem
