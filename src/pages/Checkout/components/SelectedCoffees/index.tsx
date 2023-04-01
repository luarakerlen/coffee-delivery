import { OrderSummaryContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
	return (
		<SelectedCoffeesContainer>
			<p className='containerTitle'>Cafés selecionados</p>
			<OrderSummaryContainer></OrderSummaryContainer>
		</SelectedCoffeesContainer>
	);
}
