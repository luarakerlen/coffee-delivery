import { InputHTMLAttributes } from 'react';
import { FormInputContainer } from './styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	optional?: boolean;
	customWidth?: number;
	customFlex?: number;
}

export function FormInput({
	placeholder,
	optional = false,
	customWidth = 100,
	customFlex = 1,
	...rest
}: FormInputProps) {
	return (
		<FormInputContainer
			placeholder={placeholder}
			customWidth={customWidth}
			customFlex={customFlex}
			{...rest}
		></FormInputContainer>
	);
}
