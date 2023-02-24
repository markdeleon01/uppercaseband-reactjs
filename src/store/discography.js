import { createSlice } from '@reduxjs/toolkit'

const discographySlice = createSlice({
	name: 'discography',
	initialState: { releases: [] },
	reducers: {
        setReleases(state, action) {
            state.releases = action.payload
        }
    }
})

export default discographySlice.reducer

export const discographyActions = discographySlice.actions
