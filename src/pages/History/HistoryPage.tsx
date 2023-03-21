import Container from '@mui/material/Container'
import { Typography, Grid } from '@mui/material'
import HistoryPageItem from './HistoryPageItem'
import cardsArray from 'utils/cardsArray'

type Props = {}

const HistoryPage = (props: Props) => {
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
                “If the discoveries made while traveling can be counted among the greatest pleasures of our lives, it will, in my opinion, be an even greater pleasure to return to our favorite places to show them to a loved one.”
                </p>
            </Typography>
            <Typography variant="h6" align="right">
                <p className="author-text">-Maurice Druon</p>
            </Typography>
            <Typography className="topics__title" align="left" component="h2">
                Popular topics
            </Typography>

            <Grid container spacing={6} rowSpacing={4}>
                {cardsArray
                    .filter((product) => product.category === 'history')
                    .map(
                        ({ id, title, date, description, image, category }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <HistoryPageItem
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

export default HistoryPage