import './About.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { membersActions } from '../store/members'

function About() {
	const members = useSelector((state) => state.members.members)
	const dispatch = useDispatch()

	useEffect(() => {
		async function fetchMembers() {
			const response = await fetch(
				'https://my-json-server.typicode.com/markdeleon01/uppercaseband-reactjs/members'
			)
			const resData = await response.json()
			dispatch(membersActions.setMembers(resData))
		}

		fetchMembers()
	})

	return (
		<div className='about'>
			<h1>U P P E R C A S E</h1>
			<hr width='50%' align='center' />
			<h2>Band Members</h2>
			{members &&
				members.map((member) => (
					<p className='member-item' key={member.name}>
						<span>
							{member.name} - {member.role}
						</span>
					</p>
				))}
			<hr width='50%' align='center' />
			<p className='band-pic'>
				<img alt='uppercase2019-bandPic.png' src='/uppercase2019-bandPic.png' />
			</p>
			<div className='biography'>
				<p>
					Formed in 2009, UPPERCASE is a Filipino-Canadian alternative pop rock
					indie band from Toronto, Canada pursuing Original Pilipino Music
					(OPM).
				</p>
				<p>
					Composed of Mark de Leon (vocals/guitars), Allan Lagat (bass), Joey
					Giagonia (lead guitars), and Kyle Andre (drums).
				</p>
				<p>
					In 2013 the band released their debut album entitled "
					<i>Time Space Warp</i>", and their first single "<i>Balikbayan</i>"
					caught the attention of Filipino online radio stations in the UK,
					Dubai, Manila and Toronto. They were unanimously voted "
					<b>Top Band</b>" at the 2013 Filipinos Making Waves Festival held at
					Dundas Square in downtown Toronto, winning over judges with their hit
					single "<i>Ere</i>".
				</p>
				<p>
					In 2015 the whole band went back home to Manila and performed gigs
					around the city to promote their music. They released a sophomore EP
					album entitled "<i>Bukas Makalawa</i>" consisting of five new tracks,
					including the single "<i>Tuldok</i>" released in 2016. They also
					released a Christmas single entitled "<i>Babalik</i>" on December 2,
					2017 as a salute to all Overseas Filipino Workers and Filipino
					migrants around the world.
				</p>
				<p>
					The band released its newest single "<i>Tanging Ikaw</i>" on February
					9, 2019, which was featured on Spotify's New Music Friday Philippines
					playlist on its debut week, and has enjoyed popularity and heavy
					streaming from listeners in the Philippines.
				</p>
			</div>
		</div>
	)
}

export default About
