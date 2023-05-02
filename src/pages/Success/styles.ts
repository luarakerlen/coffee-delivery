import styled from 'styled-components';

export const SuccessContainer = styled.div`
	margin: 2.5rem 10rem 0;

	@media (max-width: 768px) {
		margin: 0 2rem;
		flex-direction: column;
	}
`;

export const Title = styled.p`
	font-size: 2rem;
	font-family: 'Baloo 2', sans-serif;
	font-weight: 800;
	color: ${(props) => props.theme['yellow-dark']};
`;

export const Subtitle = styled.p`
	font-size: 1.25rem;
	color: ${(props) => props.theme['base-subtitle']};
`;

export const Content = styled.div`
	margin-top: 2.5rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

export const Infos = styled.div`
	border: 1px solid;
	border-color: ${(props) => props.theme['yellow-dark']};
	/* border-color: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%); */

	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	gap: 2rem;
	border-radius: 6px 36px;

	width: 50%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Image = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;
