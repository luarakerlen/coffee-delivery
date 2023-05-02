import {
	SuccessContainer,
	Title,
	Subtitle,
	Content,
	Infos,
	Image,
} from './styles';
import deliveryImg from '../../assets/delivery.svg';

export function Success() {
	return (
		<SuccessContainer>
			<Title>Uhu! Pedido confirmado</Title>
			<Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
			<Content>
				<Infos></Infos>
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
