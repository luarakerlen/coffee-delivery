import styled from 'styled-components';

export const OrderConfirmationContainer = styled.div`
	width: 60%;

	@media (max-width: 768px) {
		width: 100%;
	}
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

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const LineThree = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const LineFour = styled.div`
	display: flex;
	gap: 0.75rem;
`;

export const PaymentContainer = styled(DataContainer)``;

export const PaymentMethods = styled.div`
	display: flex;
	gap: 0.75rem;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
