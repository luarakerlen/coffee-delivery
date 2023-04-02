import styled from 'styled-components';

interface FormInputContainerProps {
	customWidth?: string;
	customFlex?: number;
}

export const FormInputContainer = styled.div<FormInputContainerProps>`
	padding: 0.75rem;
	border-radius: 4px;
	background-color: ${(props) => props.theme['base-input']};
	border: 1px solid ${(props) => props.theme['base-button']};

	width: ${(props) => props.customWidth};
	flex: ${(props) => props.customFlex};

	display: flex;
`;

export const Input = styled.input`
	width: 100%;
	background-color: transparent;
	border: none;

	font-size: 0.875rem;
	line-height: 130%;
	color: ${(props) => props.theme['base-text']};

	&::placeholder {
		color: ${(props) => props.theme['base-label']};
	}
`;

export const OptionalLabel = styled.p`
	color: ${(props) => props.theme['base-label']};
	font-size: 0.75rem;
	font-style: italic;
	line-height: 130%;

	align-self: center;
	/* position: relative; */
	right: 0.75rem;
`;
