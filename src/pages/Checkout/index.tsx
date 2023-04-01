import { OrderConfirmation } from './components/OrderConfirmation';
import {
	CheckoutContainer,
	OrderSummaryContainer,
	SelectedCoffeesContainer,
} from './styles';

export function Checkout() {
	return (
		<CheckoutContainer>
			<OrderConfirmation />

			<SelectedCoffeesContainer>
				<p className='containerTitle'>Cafés selecionados</p>
				<OrderSummaryContainer></OrderSummaryContainer>
			</SelectedCoffeesContainer>
		</CheckoutContainer>
	);
}
