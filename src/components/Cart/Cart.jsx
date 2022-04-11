import ReactDom from "react-dom";
import _ from "lodash";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, resetCart } from "../../redux/cart/cartSlice";
import { hideCart } from "../../redux/cart/cartStatusSlice";

// Styled Components
import { TheCart, Items, Item, Checkout, CartBackdrop } from "./Cart.style";

// Icons
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Cart = (props) => {
	const dispatch = useDispatch();
	const fruits = useSelector((state) => state.fruits);
	const cart = useSelector((state) => state.cart);
	const cartStatus = useSelector((state) => state.cartStatus);

	const cartItems = [];
	let totalPrice = 0;
	for (const fruitId in cart) {
		const { id, name, price } = fruits.find((fruit) => fruit.id === parseInt(fruitId));
		cartItems.push(
			<Item key={fruitId}>
				<div className="image flex-center">
					<img src={`/fruitam/dist/images/${name}.png`} alt={name} className="img-fluid" />
				</div>
				<div className="info">
					<div className="name">{name}</div>
					<div className="price">${price}</div>
				</div>
				<div className="operations">
					<button
						className="increase flex-center"
						onClick={() => {
							dispatch(increaseItem(fruitId));
						}}
					>
						<AiOutlinePlusCircle size="24px" />
					</button>
					<div className="count flex-center">{cart[id] < 10 ? `0${cart[id]}` : cart[id]}</div>
					<button
						className="decrease flex-center"
						// disabled={cart[id] > 1 ? false : true}
						onClick={() => dispatch(decreaseItem(fruitId))}
					>
						<AiOutlineMinusCircle size="24px" />
					</button>
				</div>
			</Item>
		);
		totalPrice += cart[fruitId] * price;
	}

	return ReactDom.createPortal(
		<>
			<CartBackdrop
				className={cartStatus ? "active" : ""}
				onClick={() => dispatch(hideCart())}
			></CartBackdrop>
			<TheCart className={cartStatus ? "active" : ""}>
				<div className="close flex-center" onClick={() => dispatch(hideCart())}>
					<IoMdClose size="20px" />
				</div>
				<div
					style={{
						fontSize: "20px",
						fontWeight: "600",
						textAlign: "center",
						marginBottom: "16px",
					}}
				>
					Shop Cart
				</div>
				<Items>{_.size(cart) > 0 && cartItems}</Items>
				<Checkout>
					<div className="total">Total: ${totalPrice}</div>
					<button className="checkout" onClick={() => dispatch(resetCart())}>
						Reset
					</button>
				</Checkout>
			</TheCart>
		</>,
		document.getElementById("cart")
	);
};

export default Cart;
