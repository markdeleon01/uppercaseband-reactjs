import './NavBar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function NavBar() {
	const location = useLocation()

	const resetNavLinksClass = () => {
		var navLinks = document.querySelectorAll('a')
		navLinks.forEach((navLink) => {
			navLink.className = ''
		})
	}

	const determineCurrentLink = () => {
		resetNavLinksClass()
		var navLinks = document.querySelectorAll('a')
		navLinks.forEach((navLink) => {
			const hrefValue = navLink.getAttribute('href')
			if (
				hrefValue === location.pathname ||
				(hrefValue === '/home' && location.pathname === '/')
			) {
				navLink.className = 'nav-link-selected'
			}
		})
	}

	const highlightLink = (event) => {
		resetNavLinksClass()
		event.target.className = 'nav-link-selected'
	}

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		determineCurrentLink()
	})

	return (
		<div id='nav'>
			<Link to='/home' onClick={highlightLink}>
				Home
			</Link>
			&nbsp;|&nbsp;
			<Link to='/about' onClick={highlightLink}>
				About
			</Link>
			&nbsp;|&nbsp;
			<Link to='/discography' onClick={highlightLink}>
				Discography
			</Link>
			&nbsp;|&nbsp;
			<Link to='/events' onClick={highlightLink}>
				Events
			</Link>
		</div>
	)
}

export default NavBar
