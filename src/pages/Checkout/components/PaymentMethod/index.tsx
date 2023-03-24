import { IconProps } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { PaymentMethodContainer } from './styles';

interface Props {
	selected?: boolean;
	title: string;
	Icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
}

export function PaymentMethod({ Icon, title, selected = false }: Props) {
	const theme = useTheme();

	return (
		<PaymentMethodContainer selected={selected}>
			<div>
				<Icon size={16} color={theme.purple} />
			</div>
			<p>{title}</p>
		</PaymentMethodContainer>
	);
}
