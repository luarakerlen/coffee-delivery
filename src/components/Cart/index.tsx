import { ShoppingCart } from 'phosphor-react';
import { CartContainer } from './styles';
import { useTheme } from 'styled-components';

interface CartProps {
	color: 'yellow-light' | 'purple-dark';
}

export function Cart({ color }: CartProps) {
	const theme = useTheme();

	const iconColor = {
		'yellow-light': 'yellow-dark',
		'purple-dark': 'base-card',
	} as const;

	return (
		<CartContainer color={color}>
			<ShoppingCart size={22} weight='fill' color={theme[iconColor[color]]} />
		</CartContainer>
	);
}
