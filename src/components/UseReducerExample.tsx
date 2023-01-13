import { useReducer } from "react";

function UserForm() {
	const [state, dispatch] = useReducer(
		(state, action) => ({
			...state,
			...action,
		}),
		{
			first: "",
			last: "",
		}
	);

	return (
		<div>
			<input
				type="text"
				value={state.first}
				onChange={(e) => dispatch({ first: e.target.value })}
			/>
			<input
				type="text"
				value={state.last}
				onChange={(e) => dispatch({ last: e.target.value })}
			/>
		</div>
	);
}

function UseReducerExample() {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "SET_NAME":
					return { ...state, name: action.payload };
				case "ADD_NAME":
					return { ...state, names: [...state.names, state.name], name: "" };
			}
		},
		{
			names: [],
			name: "",
		}
	);

	return (
		<div className="UseReducerExample">
			<div>
				{state.names.map((name, index) => (
					<div key={index}>{name}</div>
				))}
			</div>
			<input
				type="text"
				value={state.name}
				onChange={(e: any) =>
					dispatch({ type: "SET_NAME", payload: e.target.value })
				}
			/>
			<div>Name = {state.name}</div>
			<button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
		</div>
	);
}

export default UseReducerExample;
