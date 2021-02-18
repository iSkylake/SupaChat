import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
	{
		id: 3245,
		username: 'StarberryCow',
		amount: 10,
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		id: 1245,
		username: 'petabytepill',
		amount: 100,
		message: 'Phasellus bibendum feugiat enim, sed placerat risus placerat ut. Aliquam eu placerat quam. Fusce sit amet purus at urna congue elementum.'
	},
	{
		id: 2461,
		username: 'the_kraken',
		amount: 50,
		message: 'Integer nec euismod tellus, sit amet venenatis ligula.'
	},
	{
		id: 8527,
		username: 'racconIsle',
		amount: 5,
		message: 'Nulla ac odio libero.'
	},
	{
		id: 9921,
		username: 'Jullydonut',
		amount: 20,
		message: 'Quisque a mi in ipsum vestibulum malesuada.'
	},
	{
		id: 7513,
		username: 'pettanko',
		amount: 2,
		message: 'Rushia supah boingboing'
	}
]

export const supaChatsSlice = createSlice({
	name: 'supaChats',
	initialState,
	reducers: {
		addSupaChat: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(username, amount, message) {
				return {
					payload: {
						id: nanoid(),
						username,
						amount,
						message
					}
				}
			}
		}
	}
})

export const { addSupaChat } = supaChatsSlice.actions;

export default supaChatsSlice.reducer;
