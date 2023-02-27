import styled from 'styled-components';
import homeBackground from '../../../../assets/home-background.svg';

export const IntroContainer = styled.div`
	flex: 1;
	width: 100%;
	height: 34rem;
	background-image: url(${homeBackground});
	background-size: cover;

	margin-top: 2rem;
`;

export const IntroContent = styled.div`
	display: flex;
	align-items: center;
	gap: 3.5rem;

	margin: 0 10rem;

	.mainContent {
		width: 50%;

		h1 {
			font-family: 'Baloo 2', sans-serif;
			font-weight: 800;
			line-height: 130%;
			font-size: 3rem;
		}

		p {
			margin-top: 1rem;
			margin-bottom: 4.125rem;
			line-height: 130%;
			font-size: 1.25rem;
			color: ${(props) => props.theme['base-subtitle']};
		}

		.items {
			display: flex;
			gap: 2.5rem;

			.twoItems {
				display: flex;
				flex-direction: column;
				gap: 1.25rem;
			}
		}
	}

	@media (max-width: 768px) {
		margin: 0 2rem;

		.mainContent {
			width: 100%;

			h1 {
				font-size: 2rem;
			}

			p {
				margin-bottom: 2rem;
			}

			.items {
				flex-direction: column;
				gap: 1rem;

				.twoItems {
					gap: 1rem;
				}
			}
		}

		img {
			display: none;
		}
	}
`;
