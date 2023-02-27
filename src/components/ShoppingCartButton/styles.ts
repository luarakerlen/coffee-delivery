import styled from 'styled-components';

export const ShoppingCartButtonContainer = styled.button`
	position: relative;
  border: 0;
  border-radius: 6px;
  transition: border-radius 0.2s;

	&:hover {
		border-radius: 50%;
	}
`;

export const Counter = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  font-weight: bold;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['yellow-dark']};

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`
