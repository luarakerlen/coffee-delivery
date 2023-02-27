import { ShoppingCart } from 'phosphor-react';
import { CartContainer, Counter } from './styles';
import { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

export function Cart() {
	const theme = useTheme();
	const products = [1, 2];

	const hasSomeProduct = products.length > 0;

	return (
		<CartContainer>
			<NavLink to='/checkout' title='Carrinho de compras'>
				<ShoppingCart size={22} weight='fill' color={theme['yellow-dark']} />
			</NavLink>
			{hasSomeProduct && <Counter>{products.length}</Counter>}
		</CartContainer>
	);
}
