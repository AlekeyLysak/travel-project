import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import AdventurePage from 'pages/Adventure/AdventurePage'
import { ThemeProvider } from '@mui/system'
import TravelPage from 'pages/Travel/TravelPage'
import DiscoveryPage from 'pages/Discovery/DiscoveryPage'
import HistoryPage from 'pages/History/HistoryPage'
import InfoPage from 'pages/Info/InfoPage'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
})

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="adventure" element={<AdventurePage />} />
                    <Route path="travel" element={<TravelPage />} />
                    <Route path="discovery" element={<DiscoveryPage />} />
                    <Route path="history" element={<HistoryPage />} />
                    <Route path="/info/:id" element={<InfoPage />} />
                   
                </Routes>
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}
export default App
