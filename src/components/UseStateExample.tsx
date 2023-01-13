import { useState } from "react";

function Counter() {
	let [count, setCount] = useState<number>(10);

	function addOne() {
		setCount(count++);
	}

	return (
		<div className="App">
			<button onClick={addOne}>Count = {count}</button>
		</div>
	);
}

function NameList() {
	const [list, setList] = useState(["Jack", "Jill", "John"]);
	const [name, setName] = useState("");

	/**
	 * useState() can also accept a function that runs once,
	 * good for complex computation
	 * ex: useState(() => "Jack")
	 */

	const onAddName = () => {
		setList([...list, name]);
		setName("");
	};

	return (
		<div>
			<ul>
				{list.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<input
				type="text"
				value={name}
				onChange={(e: any) => setName(e.target.value)}
			/>
			<button onClick={onAddName}>Add Name</button>
		</div>
	);
}

function UseStateExample() {
	return (
		<div>
			<Counter />
			<NameList />
		</div>
	);
}

export default UseStateExample;
