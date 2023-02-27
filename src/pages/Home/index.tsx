import { Intro } from './components/Intro';
import { Cards, HomeContainer } from './styles';

export function Home() {
	return (
		<HomeContainer>
			<Intro />
			<Cards>Cards</Cards>
		</HomeContainer>
	);
}
