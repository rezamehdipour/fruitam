import styled from "styled-components";

export const MainTag = styled.main``;

export const Container = styled.div`
	padding: 8px 12px;
	border-radius: 16px;
	background-color: white;

	.title {
		text-align: center;
		margin-top: 8px;
		margin-bottom: 16px;
		h2 {
			font-size: 20px;
			font-weight: 600;
		}
	}

	.fruits {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		/* gap: 16px; */

		@media (max-width: 575px) {
			grid-template-columns: 1fr 1fr;
		}
		@media (max-width: 350px) {
			grid-template-columns: 1fr;
		}
	}
`;

export const Fruit = styled.div`
	position: relative;
	border: 1px solid rgba(0, 0, 0, 0.05);
	padding: 12px;

	.fruit__image {
		img {
			max-width: 100%;
		}
	}

	.fruit__name {
		text-transform: capitalize;
		font-weight: 600;
		margin-bottom: 16px;
	}

	.fruit__price {
		font-weight: 500;
		color: var(--green);
	}

	.fruit_add {
		position: absolute;
		right: 0px;
		bottom: 0px;
		background-color: var(--green);
		border-top-left-radius: 16px;
		cursor: pointer;
		transition-duration: 200ms;

		&:hover {
			background-color: var(--greenHover);
		}
	}
`;
