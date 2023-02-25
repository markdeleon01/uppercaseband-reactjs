import { createSlice } from '@reduxjs/toolkit'

const membersSlice = createSlice({
	name: 'members',
	initialState: { members: [] },
	reducers: {
        setMembers(state, action) {
            state.members = action.payload
        }
    }
})

export default membersSlice.reducer

export const membersActions = membersSlice.actions
