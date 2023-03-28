import { Bank, CreditCard, Money } from 'phosphor-react';

export const initialPaymentMethods = [
	{
		title: 'Cartão de crédito',
		icon: CreditCard,
		selected: false,
	},
	{
		title: 'Cartão de débito',
		icon: Bank,
		selected: false,
	},
	{
		title: 'Dinheiro',
		icon: Money,
		selected: false,
	},
];
