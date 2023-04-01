import styled from 'styled-components';

interface ContainerProps {
	selected: boolean;
	small: boolean;
}

export const IconTextButtonContainer = styled.button<ContainerProps>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 6px;
	cursor: pointer;

	border-width: 1px;
	border-style: solid;

	border-color: ${(props) =>
		props.selected ? props.theme['purple'] : props.theme['base-button']};

	background-color: ${(props) =>
		props.selected ? props.theme['purple-light'] : props.theme['base-button']};

	gap: ${(props) => (props.small ? '0.25rem' : '0.75rem')};
	padding: ${(props) => (props.small ? '0.5rem' : '1rem')};

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
