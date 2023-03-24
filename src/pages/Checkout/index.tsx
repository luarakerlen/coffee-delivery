import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { IconTitleDescription } from './components/IconTitleDescription';
import {
	AddressContainer,
	CheckoutContainer,
	OrderConfirmationContainer,
	OrderSummaryContainer,
	PaymentContainer,
	SelectedCoffeesContainer,
} from './styles';

export function Checkout() {
	const theme = useTheme();

	return (
		<CheckoutContainer>
			<OrderConfirmationContainer>
				<p className='containerTitle'>Complete seu pedido</p>
				<AddressContainer>
					<IconTitleDescription
						icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
						title='Endereço de Entrega'
						description='Informe o endereço onde deseja receber seu pedido'
					/>
				</AddressContainer>

				<PaymentContainer>
					<IconTitleDescription
						icon={<CurrencyDollar size={22} color={theme.purple} />}
						title='Pagamento'
						description='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
					/>
				</PaymentContainer>
			</OrderConfirmationContainer>

			<SelectedCoffeesContainer>
				<p className='containerTitle'>Cafés selecionados</p>
				<OrderSummaryContainer></OrderSummaryContainer>
			</SelectedCoffeesContainer>
		</CheckoutContainer>
	);
}
