import Typography from '@mui/material/Typography'
import './Logo.scss'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography className='title-logo'
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { lg: 'flex'},
                fontFamily: 'MonteCarlo, cursive',
                fontWeight: 300,
                fontSize: '42px',
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                size: 'xl',
              }}
        >
            Travelling
        </Typography>
    )
}
export default Logo
