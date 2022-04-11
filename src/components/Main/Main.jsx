import { useEffect } from "react";
import axios from "axios";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setFruits } from "../../redux/fruits/fruitsSlice";
import { addToCart } from "../../redux/cart/cartSlice";

// Styled Components
import { MainTag, Container, Fruit } from "./Main.style";

// Icons
import { BiPlus } from "react-icons/bi";

const Main = (props) => {
	const dispatch = useDispatch();
	const fruits = useSelector((state) => state.fruits);

	// ComponentDidMount()
	useEffect(() => {
		const getFruitsData = async () => {
			const { data } = await axios.get("/fruitam/api/fruits.json");
			dispatch(setFruits(data));
		};
		setTimeout(() => {
			getFruitsData();
		}, 2000);
	}, []);

	return (
		<MainTag>
			<Container className="container mx-auto">
				<div className="title">
					<h2>Choose your favorite fruit(s)</h2>
				</div>
				{fruits.length < 1 && (
					<div className="loading flex-center">
						<img src="/fruitam/dist/images/loading.gif" alt="loading" />
					</div>
				)}
				{fruits.length > 0 && (
					<div className="fruits">
						{fruits.map(({ id, name, price }) => (
							<Fruit
								key={id}
								onClick={() => {
									dispatch(addToCart(id));
								}}
							>
								<div className="fruit__image">
									<img src={`/fruitam/dist/images/${name}.png`} alt={name} />
								</div>
								<div className="fruit__name">{name}</div>
								<div className="fruit__price">${price}</div>
								<button className="fruit_add flex-center">
									<BiPlus size="28px" color="rgb(245, 245, 245)" />
								</button>
							</Fruit>
						))}
					</div>
				)}
			</Container>
		</MainTag>
	);
};

export default Main;
