import './Events.css'
import EventListing from '../components/EventListing'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { eventsActions } from '../store/events'
import { fetchEvents } from '../services/EventService'

function Events() {
	const events = useSelector((state) => state.events.events)
	const dispatch = useDispatch()

	useEffect(() => {
		fetchEvents().then((data) => {
			dispatch(eventsActions.setEvents(data))
		})
	}, [dispatch])

	return (
		<div className='events'>
			<h1>U P P E R C A S E</h1>
			<hr width='50%' align='center' />
			<h2>Events</h2>
			{events &&
				events.map((event) => <EventListing key={event.id} event={event} />)}
		</div>
	)
}

export default Events
