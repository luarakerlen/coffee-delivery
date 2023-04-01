import { InputHTMLAttributes } from 'react';
import { FormInputContainer } from './styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	optional?: boolean;
	customWidth?: string;
	customFlex?: number;
}

export function FormInput({
	placeholder,
	optional = false,
	customWidth,
	customFlex,
	...rest
}: FormInputProps) {
	return (
		<FormInputContainer
			placeholder={placeholder}
			customWidth={customWidth}
			customFlex={customFlex}
			{...rest}
		/>
	);
}
