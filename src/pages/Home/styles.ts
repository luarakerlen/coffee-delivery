import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const Cards = styled.main`
	margin: 0 10rem;
	padding-top: 2rem;

	span {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 800;
		font-size: 2rem;
		line-height: 130%;
		color: ${props => props.theme['base-subtitle']};
	}

	@media (max-width: 768px) {
		margin: 0 2rem;
	}
`;

export const CardsList = styled.div`
	display: flex;
	gap: 2rem;
`
