import { IconProps } from 'phosphor-react';
import { useTheme } from 'styled-components';
import {
	IconTextContainer,
	FirstText,
	SecondText,
	TextContainer,
	IconContainer,
} from './styles';

interface IconTextProps {
	firstText: string | JSX.Element;
	secondText: string | JSX.Element;
	color: 'yellow-dark' | 'yellow' | 'purple';
	Icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
}

export function IconText({
	firstText,
	secondText,
	color,
	Icon,
}: IconTextProps) {
	const theme = useTheme();

	return (
		<IconTextContainer>
			<IconContainer color={color}>
				<Icon color={theme.background} weight='fill' />
			</IconContainer>
			<TextContainer>
				<FirstText>{firstText}</FirstText>
				<SecondText>{secondText}</SecondText>
			</TextContainer>
		</IconTextContainer>
	);
}
