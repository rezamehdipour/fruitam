// Components
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";

function App() {
	return (
		<>
			<Header />
			<div style={{ height: "1.5rem" }}></div>
			<Cart />
			<Main />
		</>
	);
}

export default App;
