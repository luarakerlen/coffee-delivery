import styled from 'styled-components';

interface IconContainerProps {
	color: 'yellow-dark' | 'yellow' | 'purple';
}

export const IconTextContainer = styled.div`
	display: flex;
`;

export const IconContainer = styled.div<IconContainerProps>`
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	margin-right: 0.75rem;

	background-color: ${(props) => props.theme[props.color]};
`;

export const TextContainer = styled.div``;

export const FirstText = styled.p`
	color: ${(props) => props.theme['base-text']};
`;

export const SecondText = styled.p`
	color: ${(props) => props.theme['base-text']};
`;
