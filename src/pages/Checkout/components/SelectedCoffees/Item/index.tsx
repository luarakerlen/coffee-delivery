import { Trash } from 'phosphor-react';
import { QuantityButton } from '../../../../../components/QuantityButton';
import { IconTextButton } from '../../../../../components/IconTextButton';
import {
	Buttons,
	CoffeeImage,
	Infos,
	ItemContainer,
	ItemContent,
} from './styles';

interface SelectedCoffee {
	id: string;
	name: string;
	price: number;
	imageName: string;
	quantity: number;
}

interface ItemProps {
	selectedCoffee: SelectedCoffee;
}

export function Item({ selectedCoffee }: ItemProps) {
	const coffeeTotalValue = selectedCoffee.price * selectedCoffee.quantity;

	return (
		<ItemContainer>
			<ItemContent>
				<CoffeeImage
					src={`../../../../../../public/coffees/${selectedCoffee.imageName}.svg`}
					alt={selectedCoffee.name}
				/>
				<Infos>
					<p className='coffeeName'>{selectedCoffee.name}</p>
					<Buttons>
						<QuantityButton initialValue={selectedCoffee.quantity} />
						<IconTextButton
							title='Remover'
							onClick={() => {}}
							Icon={Trash}
							small
						/>
					</Buttons>
				</Infos>
			</ItemContent>

			<p className='coffeeTotalValue'>
				{coffeeTotalValue.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
					minimumFractionDigits: 2,
				})}
			</p>
		</ItemContainer>
	);
}
