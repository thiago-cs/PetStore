import { Action } from "@/models/Action";
import { Icon } from "@/views/icons";


export function CommandBarButton(props: CommandBarButtonProps): JSX.Element
{
	const { className = "", icon: Icon, iconSize, command, children } = props;

	return (
		<button className={`block cursor-pointer p-2
							hover:scale-125 active:translate-y-[1px] motion-safe:transition-transform ease-out ${className}`}
				onClick={command} >

			{ Icon && <Icon size={iconSize} /> }
			{ children }
		</button>
	);
}


type CommandBarButtonProps =
{
	icon?: Icon,
	iconSize?: number | string,
	command?: Action,

	className?: string,
	children?: React.ReactNode,
};