import Typography from '@mui/material/Typography'
import './Logo.scss'
import logo from 'assets/logo.png'
import { Link } from 'react-router-dom'



type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{
                flexGrow: 1,
            }}
        >
            <Link to="/"><img src={logo} alt="Logo" className="logos" /></Link>
            <Link to="/"><p className='logo-history'>+ history</p></Link>
        </Typography>
    )
}
export default Logo
