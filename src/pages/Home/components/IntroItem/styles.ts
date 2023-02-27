import styled from 'styled-components';

export const ItemContainer = styled.div`
	display: flex;
	align-items: center;
  gap: 0.75rem;
`;

interface ImageContainerProps {
	color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
}

export const ImageContainer = styled.div<ImageContainerProps>`
	width: 1rem;
	height: 1rem;
	box-sizing: content-box;
	padding: 0.5rem;
	border-radius: 50%;
	background-color: ${(props) => props.theme[props.color]};
`;
