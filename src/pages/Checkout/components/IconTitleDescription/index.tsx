import { IconTitleDescriptionContainer } from './styles';

interface IconTitleDescriptionProps {
	icon: JSX.Element;
	title: string;
	description: string;
}

export function IconTitleDescription({
	icon,
	title,
	description,
}: IconTitleDescriptionProps) {
	return (
		<IconTitleDescriptionContainer>
			<div>{icon}</div>
			<div>
				<p className='title'>{title}</p>
				<p className='description'>{description}</p>
			</div>
		</IconTitleDescriptionContainer>
	);
}
