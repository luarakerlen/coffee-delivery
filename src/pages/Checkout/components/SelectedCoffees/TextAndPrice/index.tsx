import { TextAndPriceContainer } from './styles';

interface TextAndPriceProps {
	text: string;
	price: number;
	bold?: boolean;
}

export function TextAndPrice({ text, price, bold = false }: TextAndPriceProps) {
	return (
		<TextAndPriceContainer bold={bold}>
			<p className='text'>{text}</p>
			<p className='price'>
				{price.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
					minimumFractionDigits: 2,
				})}
			</p>
		</TextAndPriceContainer>
	);
}
