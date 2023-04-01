import styled from 'styled-components';

export const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid ${(props) => props.theme['base-button']};

	.coffeeTotalValue {
		color: ${(props) => props.theme['base-text']};
		font-weight: 700;
		line-height: 130%;
	}
`;

export const ItemContent = styled.div`
	display: flex;
	gap: 1.25rem;
  align-items: flex-start;
`;

export const CoffeeImage = styled.img`
	height: 4rem;
	width: 4rem;
`;

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	.coffeeName {
		color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
	}
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
	height: 2rem;
`;
