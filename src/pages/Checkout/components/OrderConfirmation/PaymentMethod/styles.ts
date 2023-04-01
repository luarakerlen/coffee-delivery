import styled, { css } from 'styled-components';

interface ContainerProps {
	selected: boolean;
}

export const PaymentMethodContainer = styled.button<ContainerProps>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	padding: 1rem;
	border-radius: 6px;
	cursor: pointer;

	border-width: 1px;
	border-style: solid;

	border-color: ${(props) =>
		props.selected ? props.theme['purple'] : props.theme['base-button']};

	background-color: ${(props) =>
		props.selected ? props.theme['purple-light'] : props.theme['base-button']};

	div {
		display: flex;
	}

	p {
		text-transform: uppercase;
		line-height: 160%;
		font-size: 0.75rem;
		color: ${(props) => props.theme['base-text']};
	}
`;
