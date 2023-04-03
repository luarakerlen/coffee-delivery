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
	margin-bottom: 1.5rem;
`;

export const ConfirmButton = styled.button`
	width: 100%;
	padding: 0.75rem;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	transition: background-color 0.2s;
	background-color: ${(props) => props.theme.yellow};

	color: ${(props) => props.theme.white};
	font-weight: 700;
	line-height: 160%;
	text-transform: uppercase;
	font-size: 0.875rem;

	:hover {
		background-color: ${(props) => props.theme['yellow-dark']};
	}
`;
