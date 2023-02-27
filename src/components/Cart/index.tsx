import { ShoppingCart } from 'phosphor-react';
import { CartContainer, Counter } from './styles';
import { useTheme } from 'styled-components';

export function Cart() {
	const theme = useTheme();
	const products = [1, 2];

	const hasSomeProduct = products.length > 0;

	return (
		<CartContainer>
			<ShoppingCart size={22} weight='fill' color={theme['yellow-dark']} />
			{hasSomeProduct && <Counter>{products.length}</Counter>}
		</CartContainer>
	);
}
