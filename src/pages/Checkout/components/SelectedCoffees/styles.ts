import styled from 'styled-components';

export const SelectedCoffeesContainer = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const OrderSummaryContainer = styled.div`
	width: 100%;
	border-radius: 6px 44px;
	padding: 2.5rem;
	background-color: ${(props) => props.theme['base-card']};
`;

export const ValuesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;
