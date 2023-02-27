import styled from 'styled-components';

interface CartContainerProps {
	color: 'yellow-light' | 'purple-dark'
}

export const CartContainer = styled.div<CartContainerProps>`
	width: 1.375rem;
	height: 1.375rem;
	box-sizing: content-box;
	background-color: ${(props) => props.theme[props.color]};
	border: 0;
	padding: 0.5rem;
	border-radius: 6px;
	cursor: pointer;
`;
