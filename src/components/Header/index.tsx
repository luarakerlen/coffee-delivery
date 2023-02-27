import { HeaderContainer, HeaderContent, LocationContainer } from './styles';
import logo from '../../assets/logo.svg';
import { MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ShoppingCartButton } from '../ShoppingCartButton';

export function Header() {
	const theme = useTheme();

	return (
		<HeaderContainer>
			<NavLink to='/' title='Início'>
				<img src={logo} alt='Logo Coffee Delivery' />
			</NavLink>
			<HeaderContent>
				<LocationContainer>
					<MapPin size={22} weight='fill' color={theme.purple} />
					Cariacica, ES
				</LocationContainer>
				<ShoppingCartButton />
			</HeaderContent>
		</HeaderContainer>
	);
}
