import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	width: 16rem;
	height: 19.375rem;
	padding-bottom: 1.25rem;
	border-radius: 6px 36px 6px 36px;
	background-color: ${(props) => props.theme['base-card']};

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		position: relative;
		top: -1.25rem;
	}

	.name {
		padding: 0 1.25rem;
		text-transform: capitalize;
		text-align: center;
		font-family: 'Baloo 2', sans-serif;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 130%;
		color: ${(props) => props.theme['base-subtitle']};
	}

	.description {
		padding: 0.5rem 1.5rem 0;
		text-align: center;
		font-size: 0.875rem;
		line-height: 130%;
		color: ${(props) => props.theme['base-label']};
	}

	footer {
		display: flex;
		width: 100%;
		align-items: center;
		height: 2.375rem;
		padding: 0 1.5rem;
	}
`;

export const TagsContainer = styled.div`
	position: relative;
	top: -0.25rem;
	margin-bottom: 0.75rem;

	display: flex;
	gap: 0.25rem;

	p {
		font-weight: 700;
		font-size: 0.625rem;
		line-height: 130%;
		text-transform: uppercase;
		color: ${(props) => props.theme['yellow-dark']};
		background-color: ${(props) => props.theme['yellow-light']};
		padding: 0.25rem 0.5rem;
		border-radius: 100px;
	}
`;

export const PriceContainer = styled.p`
	font-family: 'Baloo 2';
	font-weight: 800;
	font-size: 1.5rem;
	color: ${(props) => props.theme['base-text']};

	display: block;
	text-align: start;
	flex: 1;
	width: 100%;

	span {
		font-family: 'Roboto';
		font-weight: 400;
		font-size: 0.875rem;
		color: ${(props) => props.theme['base-text']};
	}
`;

export const BuyContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	gap: 0.5rem;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	border-radius: 6px;
	background-color: ${(props) => props.theme['base-button']};

	button {
		border: 0;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: transparent; 
		height: 100%;
		padding: 0 0.5rem;
		font-weight: bold;
		font-size: 0.875rem;
		color: ${props => props.theme.purple};
	}

	button:hover {
		color: ${props => props.theme['purple-dark']};
	}

	input {
		width: 1rem;
		text-align: center;
		border: 0;
		background: transparent;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const CardButton = styled.button`
	border: 0;
	border-radius: 6px;
`;
