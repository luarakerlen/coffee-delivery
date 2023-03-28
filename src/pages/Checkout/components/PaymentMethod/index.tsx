import { IconProps } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { PaymentMethodContainer } from './styles';

interface Props {
	selected?: boolean;
	title: string;
	Icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
	onClick: (method: string) => void
}

export function PaymentMethod({ Icon, title, selected = false, onClick }: Props) {
	const theme = useTheme();

	return (
		<PaymentMethodContainer selected={selected} onClick={() => onClick(title)}>
			<div>
				<Icon size={16} color={theme.purple} />
			</div>
			<p>{title}</p>
		</PaymentMethodContainer>
	);
}
