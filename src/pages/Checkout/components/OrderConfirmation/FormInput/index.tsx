import { InputHTMLAttributes } from 'react';
import { FormInputContainer, Input, OptionalLabel } from './styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	customWidth?: string;
	customFlex?: number;
	optional?: boolean;
}

export function FormInput({
	placeholder,
	customWidth,
	customFlex,
	optional = false,
	...rest
}: FormInputProps) {
	return (
		<FormInputContainer customWidth={customWidth} customFlex={customFlex}>
			<Input placeholder={placeholder} {...rest} />
			{optional && <OptionalLabel>Opcional</OptionalLabel>}
		</FormInputContainer>
	);
}
