import styled from 'styled-components';

export const CartContainer = styled.button`
	width: 1.375rem;
	height: 1.375rem;
	box-sizing: content-box;
	background-color: ${(props) => props.theme['yellow-light']};
	border: 0;
	padding: 0.5rem;
	border-radius: 6px;
	cursor: pointer;
`;

export const Counter = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  font-weight: bold;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['yellow-dark']};

  position: relative;
  top: -2.625rem;
  right: -1.25rem;
`
