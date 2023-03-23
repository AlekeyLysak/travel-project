import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import LikeHeader from 'components/LikeHeader/LikeHeader'


type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Logo />
                <Menu />
               <LikeHeader/>
            </Toolbar>
        </Container>
    </AppBar>
    )
}

export default Header
