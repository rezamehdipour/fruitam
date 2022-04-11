import styled from "styled-components";

export const HeaderTag = styled.header`
	width: 100%;
	position: fixed;
	top: 0px;
	z-index: 997;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border-radius: 0px 0px 16px 16px;
	background-color: white;

	.logo {
		h1 {
			color: var(--green);
			font-size: 28px;
		}
	}

	.cart {
		position: relative;
		cursor: pointer;
		.cart__count {
			position: absolute;
			left: 0px;
			bottom: 0px;
			background-color: red;
			color: white;
			width: 18px;
			height: 18px;
			border-radius: 50%;
			font-size: 12px;
		}
	}
`;
