import { HeaderContainer, HeaderContent, LocationContainer } from './styles';
import logo from '../../assets/logo.svg';
import { MapPin } from 'phosphor-react';
import { Cart } from '../Cart';
import { useTheme } from 'styled-components';

export function Header() {
	const theme = useTheme();

	return (
		<HeaderContainer>
			<img src={logo} alt='Logo Coffee Delivery' />
			<HeaderContent>
				<LocationContainer>
					<MapPin size={22} weight='fill' color={theme.purple} />
					Cariacica, ES
				</LocationContainer>
				<Cart />
			</HeaderContent>
		</HeaderContainer>
	);
}
