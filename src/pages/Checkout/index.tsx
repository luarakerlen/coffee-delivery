import { OrderConfirmation } from './components/OrderConfirmation';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutContainer } from './styles';

export function Checkout() {
	return (
		<CheckoutContainer>
			<OrderConfirmation />
			<SelectedCoffees />
		</CheckoutContainer>
	);
}
