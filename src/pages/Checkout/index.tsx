import { useState } from 'react';
import { useTheme } from 'styled-components';
import { IconTitleDescription } from './components/IconTitleDescription';
import { PaymentMethod } from './components/PaymentMethod';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { initialPaymentMethods } from '../../data/paymentMethods';
import {
	AddressContainer,
	CheckoutContainer,
	FormContainer,
	LineFour,
	LineThree,
	OrderConfirmationContainer,
	OrderSummaryContainer,
	PaymentContainer,
	PaymentMethods,
	SelectedCoffeesContainer,
} from './styles';
import { FormInput } from './components/FormInput';

export function Checkout() {
	const theme = useTheme();
	const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);

	function onChoosePaymentMethod(title: string) {
		const newPaymentMethods = paymentMethods.map((paymentMethod) => {
			if (paymentMethod.title === title) {
				return {
					...paymentMethod,
					selected: true,
				};
			} else {
				return {
					...paymentMethod,
					selected: false,
				};
			}
		});

		setPaymentMethods(newPaymentMethods);
	}

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
					<FormContainer>
						<FormInput placeholder='CEP' customWidth={'200px'} />
						<FormInput placeholder='Rua' />
						<LineThree>
							<FormInput placeholder='Número' customWidth={'200px'} />
							<FormInput placeholder='Complemento' customFlex={1} optional />
						</LineThree>
						<LineFour>
							<FormInput placeholder='Bairro' customWidth={'200px'} />
							<FormInput placeholder='Cidade' customFlex={1} />
							<FormInput placeholder='UF' customWidth={'60px'} />
						</LineFour>
					</FormContainer>
				</AddressContainer>

				<PaymentContainer>
					<IconTitleDescription
						icon={<CurrencyDollar size={22} color={theme.purple} />}
						title='Pagamento'
						description='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
					/>
					<PaymentMethods>
						{paymentMethods.map((paymentMethod) => {
							return (
								<PaymentMethod
									key={paymentMethod.title}
									title={paymentMethod.title}
									Icon={paymentMethod.icon}
									selected={paymentMethod.selected}
									onClick={onChoosePaymentMethod}
								/>
							);
						})}
					</PaymentMethods>
				</PaymentContainer>
			</OrderConfirmationContainer>

			<SelectedCoffeesContainer>
				<p className='containerTitle'>Cafés selecionados</p>
				<OrderSummaryContainer></OrderSummaryContainer>
			</SelectedCoffeesContainer>
		</CheckoutContainer>
	);
}
