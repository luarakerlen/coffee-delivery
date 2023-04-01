import uuid from 'react-uuid';
import { Item } from './Item';
import { OrderSummaryContainer, SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
	const selectedCoffees = [
		{
			id: uuid(),
			name: 'Expresso Tradicional',
			price: 9.9,
			imageName: 'expresso',
			quantity: 2,
		},
		{
			id: uuid(),
			name: 'Expresso Americano',
			price: 9.9,
			imageName: 'americano',
			quantity: 3,
		},
		{
			id: uuid(),
			name: 'Expresso Cremoso',
			price: 9.9,
			imageName: 'expresso-cremoso',
			quantity: 1,
		},
	];

	return (
		<SelectedCoffeesContainer>
			<p className='containerTitle'>Cafés selecionados</p>
			<OrderSummaryContainer>
				{selectedCoffees.map((selectedCoffee) => {
					return (
						<Item key={selectedCoffee.id} selectedCoffee={selectedCoffee} />
					);
				})}
			</OrderSummaryContainer>
		</SelectedCoffeesContainer>
	);
}
