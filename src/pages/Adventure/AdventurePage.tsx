import { Typography, Grid } from '@mui/material'
import AdventurePageItem from './AdventurePageItem'
import cardsArray from 'utils/cardsArray'
import Container from '@mui/material/Container'

type Props = {}

const AdventurePage = (props: Props) => {
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
                <p className="author-text">-Richard Aldington</p>
            </Typography>
            <Typography className="topics__title" align="left" component="h2">
                Popular topics
            </Typography>

            <Grid container spacing={6} rowSpacing={4}>
                {cardsArray
                    .filter((product) => product.category === 'adventure')
                    .map(
                        ({ id, title, date, description, image, category }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <AdventurePageItem
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
export default AdventurePage
