import Typography from '@mui/material/Typography'

type Props = {}
const Logo = (props: Props) => {
  return (
   <Typography
   variant="h6"
   noWrap
   component="a"
   href="/"
   sx={{
     mr: 2,
     display: { lg: 'flex' },
     fontFamily: "MonteCarlo, cursive",
   fontWeight: 300,
   fontSize: '42px',
   letterSpacing: '.1rem',
   color: 'inherit',
   textDecoration: 'none',
   size: "xl",
   }}
 >
   Travelling
</Typography>
  )
}
export default Logo