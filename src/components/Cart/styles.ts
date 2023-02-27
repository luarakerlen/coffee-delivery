import styled from 'styled-components';

interface CartContainerProps {
	color: 'yellow-light' | 'purple-dark';
}

export const CartContainer = styled.div<CartContainerProps>`
	width: 1.375rem;
	height: 1.375rem;
	box-sizing: content-box;
	border: 0;
	padding: 0.5rem;
	border-radius: 6px;
	cursor: pointer;
	background-color: ${(props) => props.theme[props.color]};
	transition: background-color 0.2s, border-radius 0.2s;

	&:hover {
		background-color: ${(props) =>
			props.color === 'purple-dark' && props.theme.purple};

		border-radius: ${(props) => props.color === 'yellow-light' && '50px'};
	}
`;
