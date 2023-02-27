import { IconProps } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ImageContainer, ItemContainer } from './styles';

interface IntroItemProps {
	description: string;
	color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple';
	Icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
}

export function IntroItem({ description, color, Icon }: IntroItemProps) {
	const theme = useTheme();

	return (
		<ItemContainer>
			<ImageContainer color={color}>
				<Icon size={16} weight='fill' color={theme.background} />
			</ImageContainer>
			<span>{description}</span>
		</ItemContainer>
	);
}
