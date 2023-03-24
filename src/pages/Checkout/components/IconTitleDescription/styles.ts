import styled from 'styled-components';

export const IconTitleDescriptionContainer = styled.div`
	display: flex;
	gap: 8px;

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
