import styled from 'styled-components';

interface FormInputContainerProps {
	customWidth?: string;
	customFlex?: number;
}

export const FormInputContainer = styled.input<FormInputContainerProps>`
	padding: 0.75rem;
	border-radius: 4px;
	background-color: ${(props) => props.theme['base-input']};
	border: 1px solid ${(props) => props.theme['base-button']};

	font-size: 0.875rem;
	line-height: 130%;
	color: ${(props) => props.theme['base-text']};

	width: ${(props) => props.customWidth};
	flex: ${(props) => props.customFlex};

	&::placeholder {
		color: ${(props) => props.theme['base-label']};
	}
`;
