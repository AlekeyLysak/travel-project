import { Typography, Grid } from '@mui/material'
import PopularTopicsItem from './PopularTopicsItem'
import cardsArray from 'utils/cardsArray'

type Props = {}

const PopularTopics = (props: Props) => {
    return (
        <>
            <Typography
                className="quote"
                variant="h5"
                align="center"
                component="h2"
                marginTop="75px"
            >
                <p className="border-text">
                    "In twenty years you will regret more not what you did, but
                    what you didn't do. So throw off the knots, swim out of the
                    safe harbors. Catch the wind in your sails. Explore. Dream.
                    Open up."
                </p>
            </Typography>
            <Typography variant="h6" align="right">
                <p className="author-text">-Mark Twain</p>
            </Typography>
            <Typography className="topics__title" align="left" component="h2">
                Popular topics
            </Typography>

            <Grid container spacing={6} rowSpacing={4}>
                {cardsArray
                // .filter((product) => product.category === '')
                .map(
                    ({ id, title, date, description, image, category }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <PopularTopicsItem
                                id={id}
                                title={title}
                                date={date}
                                description={description}
                                image={image}
                                category={category}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default PopularTopics
