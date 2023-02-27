import { HeaderContainer, HeaderContent, LocationContainer } from './styles';
import logo from '../../assets/logo.svg';
import { MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ShoppingCartButton } from '../ShoppingCartButton';
import { Logo } from '../../assets/logo';

export function Header() {
	const theme = useTheme();

	return (
		<HeaderContainer>
			<NavLink to='/' title='Início'>
				<Logo textColor={theme['base-subtitle']} />
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
