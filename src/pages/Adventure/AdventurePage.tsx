import { Typography, Grid } from '@mui/material'
import AdventurePageItem from './AdventurePageItem'
import cardsArray from 'utils/cardsArray'
import Container from '@mui/material/Container'
import video from '../../assets/adventure.mp4'

type Props = {}

const AdventurePage = (props: Props) => {
    return (
        <>
            <Typography>
                <div>
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        typeof="adventure/mp4"
                        className="ad-video"
                    />
                    <h2 className="ad-titles">ADVENTURE</h2>
                </div>
            </Typography>
            <Container>
                <Typography
                    className="quote"
                    variant="h5"
                    align="center"
                    component="h2"
                    marginTop="75px"
                >
                    <p className="border-text">
                        “Life is a wonderful adventure, worthy of enduring
                        failures for the sake of success.”
                    </p>
                </Typography>
                <Typography variant="h6" align="right">
                    <p className="author-text">-Richard Aldington</p>
                </Typography>
                <Typography
                    className="topics__title"
                    align="left"
                    component="h2"
                >
                    Category: <span className="green">Adventure</span>
                </Typography>

                <Grid container spacing={6} rowSpacing={4} className='main-content'>
                    {cardsArray
                        .filter((product) => product.category === 'adventure')
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
                                    <AdventurePageItem
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
            </Container>
        </>
    )
}
export default AdventurePage
