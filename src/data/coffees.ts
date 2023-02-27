import { CoffeeInterface } from '../interfaces/coffee';

export const coffees: CoffeeInterface[] = [
	{
		id: '1',
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 9.9,
		tags: ['tradicional'],
		imageName: 'expresso',
	},
	{
		id: '2',
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 9.9,
		tags: ['tradicional'],
		imageName: 'americano',
	},
	{
		id: '3',
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 9.9,
		tags: ['tradicional'],
		imageName: 'expresso-cremoso',
	},
	{
		id: '4',
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 9.9,
		tags: ['tradicional', 'gelado'],
		imageName: 'cafe-gelado',
	},
];
