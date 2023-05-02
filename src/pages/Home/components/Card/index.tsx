import { Cart } from '../../../../components/Cart';
import { QuantityButton } from '../../../../components/QuantityButton';
import { CoffeeInterface } from '../../../../interfaces/coffee';
import {
	BuyContainer,
	CardButton,
	CardContainer,
	PriceContainer,
	TagsContainer,
} from './styles';

interface CardProps {
	coffee: CoffeeInterface;
}

export function Card({ coffee }: CardProps) {
	return (
		<CardContainer>
			<main>
				<img
					src={`/coffees/${coffee.imageName}.svg`}
					alt='Café'
				/>

				<TagsContainer>
					{coffee.tags.map((tag) => (
						<p key={tag}>{tag}</p>
					))}
				</TagsContainer>

				<p className='name'>{coffee.name}</p>
				<p className='description'>{coffee.description}</p>
			</main>

			<footer>
				<PriceContainer>
					<span>R$</span>{' '}
					{coffee.price.toLocaleString('pt-BR', {
						minimumFractionDigits: 2,
					})}
				</PriceContainer>

				<BuyContainer>
					<QuantityButton/>
					<CardButton>
						<Cart color='purple-dark' />
					</CardButton>
				</BuyContainer>
			</footer>
		</CardContainer>
	);
}
