import Container from '@mui/material/Container'
import { Typography, Grid } from '@mui/material'
import TravelPageItem from './TravelPageItem'
import cardsArray from 'utils/cardsArray'
import video from "../../assets/cliff.mp4"

type Props = {}

const TravelPage = (props: Props) => {
    return (
        <>
        <Typography>
        <div>
          <video src={video} autoPlay muted loop typeof='cliff/mp4' className='ad-video'/>
          <h2 className='ad-titles'>TRAVEL</h2>
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
                        “We travel the world to find beauty; we must keep it
                        within ourselves, otherwise it will not be revealed to
                        us.”
                    </p>
                </Typography>
                <Typography variant="h6" align="right">
                    <p className="author-text">-Ralph Waldo Emerson</p>
                </Typography>
                <Typography
                    className="topics__title"
                    align="left"
                    component="h2"
                >
                    Category: <span className='brown'>Travel</span>
                </Typography>

                <Grid container spacing={6} rowSpacing={4}>
                    {cardsArray
                        .filter((product) => product.category === 'travel')
                        .map(
                            ({
                                id,
                                title,
                                date,
                                description,
                                image,
                                category,
                            }) => (
                                <Grid item xs={12} sm={6} md={4} key={id} className='main-content'>
                                    <TravelPageItem
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

export default TravelPage
