import { QuantityContainer } from './styles';

interface QuantityButtonProps {
	initialValue?: number;
}

export function QuantityButton({ initialValue = 1 }: QuantityButtonProps) {
	return (
		<QuantityContainer>
			<button>-</button>
			<input type='number' min={1} value={initialValue} />
			<button>+</button>
		</QuantityContainer>
	);
}
