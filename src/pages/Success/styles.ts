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
`;

export const Content = styled.div`
	display: flex;
`;

export const Infos = styled.div`
	width: 50%;
`;

export const Image = styled.div`
	@media (max-width: 768px) {
		display: none;
	}
`;
