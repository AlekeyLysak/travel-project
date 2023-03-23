import { Typography, Grid } from '@mui/material'
import AdventurePageItem from './AdventurePageItem'
import cardsArray from 'utils/cardsArray'
import Container from '@mui/material/Container'
import video from "../../assets/adventure.mp4"
type Props = {}

const AdventurePage = (props: Props) => {
    return (
      <>
      <Typography>
        <div>
          <video src={video} autoPlay muted loop typeof='adventure/mp4' className='ad-video'/>
          <h2 className='ad-title'>ADVENTURE</h2>
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
                    “We travel the world to find beauty; we must keep it within
                    ourselves, otherwise it will not be revealed to us.”
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
      </>
    )
}
export default AdventurePage
