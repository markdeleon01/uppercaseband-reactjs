import './Home.css'
import { useEffect } from 'react'
import NProgress from 'nprogress'

function Home() {
	NProgress.start()

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		NProgress.done()
	})

	return (
		<div className='home'>
			<h1>U P P E R C A S E</h1>
			<hr width='50%' align='center' />
			<h2>Welcome to the Official Website!</h2>
			<p className='band-logo'>
				<img alt='UPPERCASE-logo.png' src='UPPERCASE-logo.png' />
			</p>
			<p className='page-content'>
				UPPERCASE is a Filipino-Canadian indie pop rock band from Toronto,
				Canada pursuing Original Pilipino Music (OPM)
			</p>
			<p>
				Check out the band's music on&nbsp;
				<a
					href='https://open.spotify.com/artist/6h4pjpssOa3fBNiQmSkgOB'
					target='blank'
				>
					Spotify
				</a>
				!
			</p>
			<p>
				Follow the band on&nbsp;
				<a
					href='https://www.instagram.com/ang.bandang.uppercase/'
					target='blank'
				>
					Instagram
				</a>
				!
			</p>
			<p>
				Like and Share on&nbsp;
				<a
					href='https://www.facebook.com/ang.bandang.uppercase/'
					target='blank'
				>
					Facebook
				</a>
				!
			</p>
		</div>
	)
}

export default Home
