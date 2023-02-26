import './Discography.css'
import DiscographyListing from '../components/DiscographyListing'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { discographyActions } from '../store/discography'
import { fetchDiscography } from '../services/DiscographyService'

function Discography() {
	const releases = useSelector((state) => state.discography.releases)
	const dispatch = useDispatch()

	useEffect(() => {
		fetchDiscography().then((data) => {
			dispatch(discographyActions.setReleases(data))
		})
	}, [dispatch])

	return (
		<div className='discography'>
			<h1>U P P E R C A S E</h1>
			<hr width='50%' align='center' />
			<h2>Discography</h2>
			{releases &&
				releases.map((release) => (
					<DiscographyListing key={release.title} release={release} />
				))}
		</div>
	)
}

export default Discography
