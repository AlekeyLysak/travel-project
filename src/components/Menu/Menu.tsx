import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/adventure">Adventure</MenuItem>
            <MenuItem to="/travel">Travel</MenuItem>
            <MenuItem to="/discovery">Discovery</MenuItem>
            <MenuItem to="/history">History</MenuItem>
            <MenuItem to="/favourite">Favourite</MenuItem>
       </>
    )
}

export default Menu
