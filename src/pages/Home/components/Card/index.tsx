import { Cart } from '../../../../components/Cart';
import { CoffeeInterface } from '../../../../interfaces/coffee';
import {
	BuyContainer,
	CardButton,
	CardContainer,
	PriceContainer,
	QuantityContainer,
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
					src={`../../../../../public/coffees/${coffee.imageName}.svg`}
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
					<QuantityContainer>
						<button>-</button>
						<input type='number' min={1} value={1} />
						<button>+</button>
					</QuantityContainer>
					<CardButton>
						<Cart color='purple-dark' />
					</CardButton>
				</BuyContainer>
			</footer>
		</CardContainer>
	);
}
