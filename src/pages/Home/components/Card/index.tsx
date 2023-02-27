import { CoffeeInterface } from '../..';
import { CardContainer } from './styles';

interface CardProps {
	coffee: CoffeeInterface;
}

export function Card({ coffee }: CardProps) {
	return (
		<CardContainer>
			<img src={`../../../../../public/coffees/${coffee.imageName}.svg`} alt='' />
		</CardContainer>
	);
}
