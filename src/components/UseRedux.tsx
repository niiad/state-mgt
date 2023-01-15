import { createSlice } from "@reduxjs/toolkit";

type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

const todosSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		todoAdded(state: Todo[], action) {
			state.push({
				id: action.payload.id,
				text: action.payload.text,
				completed: false,
			});
		},
		todoToggled(state: Todo[], action) {
			const todo = state.find((todo) => todo.id === action.payload);

			if (todo) {
				todo.completed = !todo.completed;
			}
		},
	},
});

export const { todoAdded, todoToggled } = todosSlice.actions;

export default todosSlice.reducer;
