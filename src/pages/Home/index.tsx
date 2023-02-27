import { coffees } from '../../data/coffees';
import { Card } from './components/Card';
import { Intro } from './components/Intro';
import { Cards, CardsList, HomeContainer } from './styles';

export function Home() {
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
