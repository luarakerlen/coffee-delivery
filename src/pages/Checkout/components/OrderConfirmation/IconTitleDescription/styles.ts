import styled from 'styled-components';

export const IconTitleDescriptionContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;

	.title {
		line-height: 130%;
		font-size: 1rem;
		color: ${(props) => props.theme['base-subtitle']};
	}

	.description {
		line-height: 130%;
		font-size: 0.875rem;
		color: ${(props) => props.theme['base-text']};
	}
`;
