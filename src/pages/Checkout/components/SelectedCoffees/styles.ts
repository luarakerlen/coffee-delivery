import styled from 'styled-components';

export const SelectedCoffeesContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const OrderSummaryContainer = styled.div`
	height: 100px;

	width: 100%;
	border-radius: 6px 44px;
	padding: 2.5rem;
	background-color: ${(props) => props.theme['base-card']};
`;
