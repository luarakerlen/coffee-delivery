import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin: 0 10rem;

	@media (max-width: 768px) {
		margin: 0 2rem;
	}
`;

export const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
`;

export const LocationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;

	color: ${(props) => props.theme['purple-dark']};
	line-height: 1.125rem;
	background-color: ${(props) => props.theme['purple-light']};
	padding: 0.5rem;
	border-radius: 6px;
`;
