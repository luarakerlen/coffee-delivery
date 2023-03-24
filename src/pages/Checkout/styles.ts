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

export const OrderConfirmationContainer = styled.div`
	width: 40rem;
`;

const DataContainer = styled.div`
	width: 100%;
	border-radius: 6px;
  padding: 2.5rem;
	background-color: ${(props) => props.theme['base-card']};
`;

export const AddressContainer = styled(DataContainer)`
  margin-bottom: 0.75rem;
`;

export const PaymentContainer = styled(DataContainer)`
`;

export const SelectedCoffeesContainer = styled.div`
	width: 28rem;
`;

export const OrderSummaryContainer = styled.div``;
