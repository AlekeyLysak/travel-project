import Typography from '@mui/material/Typography'
import './Logo.scss'
import logo from 'assets/logo.png'

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
            <img src={logo} alt="Logo" className="logos" />
        </Typography>
    )
}
export default Logo
