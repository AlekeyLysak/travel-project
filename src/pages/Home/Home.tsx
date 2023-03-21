import { Container } from '@mui/material'
import PopularTopics from 'components/PopularTopics/PopularTopics'
import SwiperLanding from 'components/Swiper/SwiperLanding'


type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <SwiperLanding />
            <Container>
                <PopularTopics />
              </Container>
          </div>
    )
}
export default Home
