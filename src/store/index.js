import { configureStore } from '@reduxjs/toolkit'
import membersReducer from './members'
import discographyReducer from './discography'
import eventsReducer from './events'

// only one store!
const store = configureStore({
	// map of reducers
	reducer: {
		members: membersReducer,
		discography: discographyReducer,
		events: eventsReducer
	}
})

export default store
