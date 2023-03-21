import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'


type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Logo />
                <Menu />
               
            </Toolbar>
        </Container>
    </AppBar>
    )
}

export default Header
