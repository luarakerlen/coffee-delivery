import { IconProps } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { IconTextButtonContainer } from './styles';

interface IconTextButtonProps {
	selected?: boolean;
	title: string;
	Icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
	onClick: (method?: string) => void;
	small?: boolean;
}

export function IconTextButton({
	Icon,
	title,
	selected = false,
	onClick,
	small = false,
}: IconTextButtonProps) {
	const theme = useTheme();

	return (
		<IconTextButtonContainer
			selected={selected}
			small={small}
			onClick={() => onClick(title)}
		>
			<div>
				<Icon size={16} color={theme.purple} />
			</div>
			<p>{title}</p>
		</IconTextButtonContainer>
	);
}
