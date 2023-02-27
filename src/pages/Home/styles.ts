import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const Cards = styled.main`
	margin: 0 10rem;
	padding-top: 2rem;

	@media (max-width: 768px) {
		margin: 0;
		padding-top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const CardsTitle = styled.p`
	font-family: 'Baloo 2', sans-serif;
	font-weight: 800;
	font-size: 2rem;
	line-height: 130%;
	color: ${(props) => props.theme['base-subtitle']};
`;

export const CardsList = styled.div`
	margin-top: 3.375rem;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
