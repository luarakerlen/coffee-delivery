import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { Item } from './Item';
import {
	ConfirmButton,
	OrderSummaryContainer,
	SelectedCoffeesContainer,
	ValuesContainer,
} from './styles';
import { TextAndPrice } from './TextAndPrice';

export function SelectedCoffees() {
	const navigate = useNavigate();

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

	const deliveryPrice = 3.5;
	const totalValue = selectedCoffees.reduce((acc, curr) => {
		return acc + curr.price * curr.quantity;
	}, 0);

	function handleConfirmOrder() {
		navigate('/success');
	}

	return (
		<SelectedCoffeesContainer>
			<p className='containerTitle'>Cafés selecionados</p>
			<OrderSummaryContainer>
				{selectedCoffees.map((selectedCoffee) => {
					return (
						<Item key={selectedCoffee.id} selectedCoffee={selectedCoffee} />
					);
				})}
				<ValuesContainer>
					<TextAndPrice text='Total de itens' price={totalValue} />
					<TextAndPrice text='Entrega' price={deliveryPrice} />
					<TextAndPrice text='Total' price={totalValue + deliveryPrice} bold />
				</ValuesContainer>
				<ConfirmButton onClick={handleConfirmOrder}>
					CONFIRMAR PEDIDO
				</ConfirmButton>
			</OrderSummaryContainer>
		</SelectedCoffeesContainer>
	);
}
