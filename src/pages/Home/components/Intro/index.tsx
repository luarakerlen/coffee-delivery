import { IntroContainer, IntroContent } from './styles';
import mainCoffee from '../../../../assets/main-coffee.svg';
import { IntroItem } from '../IntroItem';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export function Intro() {
	return (
		<IntroContainer>
			<IntroContent>
				<div className='mainContent'>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<div className='items'>
						<div className='twoItems'>
							<IntroItem
								description='Compra simples e segura'
								color='yellow-dark'
								Icon={ShoppingCart}
							/>
							<IntroItem
								description='Entrega rápida e rastreada'
								color='yellow'
								Icon={Timer}
							/>
						</div>
						<div className='twoItems'>
							<IntroItem
								description='Embalagem mantém o café intacto'
								color='base-text'
								Icon={Package}
							/>
							<IntroItem
								description='O café chega fresquinho até você'
								color='purple'
								Icon={Coffee}
							/>
						</div>
					</div>
				</div>
				<img
					src={mainCoffee}
					alt='Imagem de um copo de café escrito Coffee Delivery. Ao fundo, grãos de café'
				/>
			</IntroContent>
		</IntroContainer>
	);
}
