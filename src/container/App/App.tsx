import Header from "container/Header/Header"
import Main from "container/Main/Main"
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles';
import SwiperLanding from "components/Swiper/SwiperLanding";


type Props = {}
const App = (props: Props) => {
  return (
     <StyledEngineProvider injectFirst>
        <CssBaseline/>
        <Header />
        <SwiperLanding/>
        <Main />
      </StyledEngineProvider>
  )
}
export default App