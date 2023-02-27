import styled from 'styled-components';

export const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 10rem;

	@media (max-width: 768px) {
    margin: 2rem 2rem;
	}
`;
