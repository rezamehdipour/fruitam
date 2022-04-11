import styled from "styled-components";

export const CartBackdrop = styled.div`
	display: none;
	opacity: 0;
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	transition-duration: 200ms;
	z-index: 998;
	&.active {
		display: block;
		opacity: 1;
	}
`;

export const TheCart = styled.div`
	position: fixed;
	top: 0px;
	right: -280px;
	width: 280px;
	height: 100vh;
	background-color: white;
	padding: 12px;
	border-radius: 12px 0px 0px 12px;
	transition-duration: 200ms;
	z-index: 999;
	&.active {
		right: 0px;
	}

	.close {
		position: absolute;
		top: 5px;
		left: 5px;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.03);
		border-radius: 16px;
		padding: 4px;
	}
`;

export const Items = styled.div`
	margin-bottom: 32px;
`;

export const Item = styled.div`
	display: grid;
	grid-template-columns: 60px minmax(10px, 1fr) auto;
	padding: 12px 0px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	&:nth-last-child(1) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.image {
	}

	.info {
		margin-left: 12px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.name {
			text-transform: capitalize;
			font-weight: 600;
		}
		.price {
			font-weight: 500;
			color: var(--green);
		}
	}

	.operations {
		display: flex;
		flex-direction: column;
		align-items: center;

		button {
			cursor: pointer;
			&:disabled {
				opacity: 0.3;
			}
		}

		.count {
			font-size: 14px;
			margin: 5px 0px;
			padding: 4px;
			color: white;
			background-color: var(--green);
			border-radius: 3px;
		}
	}
`;

export const Checkout = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.total {
		font-weight: bold;
	}

	.checkout {
		color: white;
		background-color: var(--green);
		padding: 4px 8px;
		border-radius: 5px;
		cursor: pointer;
	}
`;
