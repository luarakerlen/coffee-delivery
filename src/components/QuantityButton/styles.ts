import styled from 'styled-components';

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	border-radius: 6px;
	padding: 0.5rem;
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
		color: ${(props) => props.theme.purple};
	}

	button:hover {
		color: ${(props) => props.theme['purple-dark']};
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
