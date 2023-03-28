import { Container, Grid, Typography } from '@mui/material'
import PopularTopicsItem from 'components/PopularTopics/PopularTopicsItem'
import { useAppSelector } from 'redux/hooks'
import cardsArray, { Cart } from 'utils/cardsArray'
import './Favourite.scss'

type Props = {}

const Favourite = (props: Props) => {
    const productsLikeState = useAppSelector((state) => state.productsLikeState)

    const likedArticles = cardsArray.filter(
        ({ id }: Cart) => productsLikeState[id]
    )

    return likedArticles.length === 0 ? (
        <Typography
            className="article-border"
            sx={{
                marginTop: '180px',
                marginBottom: '102px',
            }}
            variant="h4"
            align="center"
            component="h2"
        >
            NO LIKED ARTICLES YET
        </Typography>
    ) : (
        <Container
            sx={{
                marginTop: '90px',
                flexGrow: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Grid container spacing={3}>
                {likedArticles.map(
                    ({
                        title,
                        description,
                        image,
                        id,
                        date,
                        category,
                    }: Cart) => (
                        <Grid key={id} item xs={12} sm={6} md={4} className='main-content'>
                            <PopularTopicsItem
                                date={date}
                                title={title}
                                description={description}
                                image={image}
                                id={id}
                                category={category}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    )
}

export default Favourite
