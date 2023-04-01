import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin: 2.5rem 10rem 0;

	.containerTitle {
		font-family: 'Baloo 2', sans-serif;
		font-size: 1.125rem;
		line-height: 130%;
		margin-bottom: 0.9375rem;
	}

	@media (max-width: 768px) {
		margin: 0 2rem;
		flex-direction: column;
	}
`;

export const SelectedCoffeesContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const OrderSummaryContainer = styled.div``;
