import { ShoppingCartButtonContainer, Counter } from './styles';
import { NavLink } from 'react-router-dom';
import { Cart } from '../Cart';

export function ShoppingCartButton() {
	const products = [1, 2];

	const hasSomeProduct = products.length > 0;

	return (
		<ShoppingCartButtonContainer>
			<NavLink to='/checkout' title='Carrinho de compras'>
				<Cart color='yellow-light' />
			</NavLink>

			{hasSomeProduct && <Counter>{products.length}</Counter>}
		</ShoppingCartButtonContainer>
	);
}
