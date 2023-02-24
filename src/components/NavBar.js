import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<div id='nav'>
			<Link to='/home'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/discography'>Discography</Link> | <Link to='/events'>Events</Link>
		</div>
	)
}

export default NavBar
