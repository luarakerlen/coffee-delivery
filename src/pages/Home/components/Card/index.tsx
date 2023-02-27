import { CoffeeInterface } from '../..';

interface CardProps {
	coffee: CoffeeInterface;
}

export function Card({ coffee }: CardProps) {
	return <div>card</div>;
}
