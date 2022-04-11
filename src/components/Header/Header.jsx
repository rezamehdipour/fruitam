import _ from "lodash";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cart/cartStatusSlice";

// Styled Components
import { HeaderTag, Container } from "./Header.style";

// Icons
import { FaShoppingBasket } from "react-icons/fa";

const Header = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	return (
		<>
			<HeaderTag>
				<Container className="container mx-auto">
					<div className="logo">
						{/* <GiKiwiFruit color="#670b8b" size="40px" /> */}
						<h1>Fruitam</h1>
					</div>
					<div className="cart flex-center" onClick={() => dispatch(toggleCart())}>
						<FaShoppingBasket color="#26ae60" size="36px" />
						{_.size(cart) > 0 && <div className="cart__count flex-center">{_.size(cart)}</div>}
					</div>
				</Container>
			</HeaderTag>
			<div style={{ height: "2.5rem" }}></div>
		</>
	);
};

export default Header;
