import {
	SuccessContainer,
	Title,
	Subtitle,
	Content,
	Infos,
	Image,
} from './styles';
import deliveryImg from '../../assets/delivery.svg';
import { IconText } from './components/IconText';
import { MapPin } from 'phosphor-react';

export function Success() {
	return (
		<SuccessContainer>
			<Title>Uhu! Pedido confirmado</Title>
			<Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
			<Content>
				<Infos>
					<IconText
						firstText={
							<p>
								Entrega em <strong>Rua São Sebastião, 48</strong>
							</p>
						}
						secondText='São Benedito - Cariacica, ES'
						Icon={MapPin}
						color='purple'
					/>
				</Infos>
				<Image>
					<img
						src={deliveryImg}
						alt='Imagem de um homem em cima de uma motocicleta.'
					/>
				</Image>
			</Content>
		</SuccessContainer>
	);
}
