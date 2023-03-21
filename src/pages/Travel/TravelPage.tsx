import Container from '@mui/material/Container'
import { Typography, Grid } from '@mui/material'
import TravelPageItem from './TravelPageItem'
import cardsArray from 'utils/cardsArray'

type Props = {}

const TravelPage = (props: Props) => {
    return (
        <Container>
            <Typography
                className="quote"
                variant="h5"
                align="center"
                component="h2"
                marginTop="155px"
            >
                <p className="border-text">
                “We travel the world to find beauty; we must keep it within ourselves, otherwise it will not be revealed to us.”
                </p>
            </Typography>
            <Typography variant="h6" align="right">
                <p className="author-text">-Ralph Waldo Emerson</p>
            </Typography>
            <Typography className="topics__title" align="left" component="h2">
                Popular topics
            </Typography>

            <Grid container spacing={6} rowSpacing={4}>
                {cardsArray
                    .filter((product) => product.category === 'travel')
                    .map(
                        ({ id, title, date, description, image, category }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <TravelPageItem
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
        </Container>
    )
}

export default TravelPage
