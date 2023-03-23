import Container from '@mui/material/Container'
import { Typography, Grid } from '@mui/material'
import HistoryPageItem from './HistoryPageItem'
import cardsArray from 'utils/cardsArray'
import video from "../../assets/history.mp4"

type Props = {}

const HistoryPage = (props: Props) => {
    return (
        <>
            <Typography>
                <div>
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        typeof="history/mp4"
                        className="ad-video"
                    />
                    <h2 className="ad-title">HISTORY</h2>
                </div>
            </Typography>
            <Container>
                <Typography
                    className="quote"
                    variant="h5"
                    align="center"
                    component="h2"
                    marginTop="155px"
                >
                    <p className="border-text">
                        “History is the treasury of our deeds, a witness to the
                        past, an example and lesson for the present, a warning
                        for the future.”
                    </p>
                </Typography>
                <Typography variant="h6" align="right">
                    <p className="author-text">-Miguel de Cervantes</p>
                </Typography>
                <Typography
                    className="topics__title"
                    align="left"
                    component="h2"
                >
                    Popular topics
                </Typography>

                <Grid container spacing={6} rowSpacing={4}>
                    {cardsArray
                        .filter((product) => product.category === 'history')
                        .map(
                            ({
                                id,
                                title,
                                date,
                                description,
                                image,
                                category,
                            }) => (
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
        </>
    )
}

export default HistoryPage
