import { Card } from './components/Card';
import { Intro } from './components/Intro';
import { Cards, CardsList, HomeContainer } from './styles';

export interface CoffeeInterface {
	id: string;
	name: string;
	description: string;
	price: number;
	tags: string[];
	imageName: string;
}

export function Home() {
	const coffees: CoffeeInterface[] = [
		{
			id: '1',
			name: 'Expresso tradicional',
			description: 'O tradicional café feito com água quente e grãos moídos',
			price: 9.9,
			tags: ['tradicional'],
			imageName: 'americano',
		},
		{
			id: '2',
			name: 'Expresso tradicional',
			description: 'O tradicional café feito com água quente e grãos moídos',
			price: 9.9,
			tags: ['tradicional'],
			imageName: 'americano',
		},
	];

	return (
		<HomeContainer>
			<Intro />

			<Cards>
				<span>Nossos cafés</span>
				<CardsList>
					{coffees.map((coffee) => {
						return <Card key={coffee.id} coffee={coffee} />;
					})}
				</CardsList>
			</Cards>
		</HomeContainer>
	);
}
