import styled from 'styled-components';

interface ContainerProps {
	bold: boolean;
}

export const TextAndPriceContainer = styled.div<ContainerProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.text,
	.price {
		font-family: 'Roboto', sans-serif;
		line-height: 130%;

		font-weight: ${(props) => (props.bold ? 700 : 400)};
		color: ${(props) =>
			props.bold ? props.theme['base-subtitle'] : props.theme['base-text']};
	}

	.text {
		font-size: ${(props) => (props.bold ? '1.25rem' : '0.875rem')};
	}

	.price {
		font-size: ${(props) => (props.bold ? '1.25rem' : '1rem')};
	}
`;
