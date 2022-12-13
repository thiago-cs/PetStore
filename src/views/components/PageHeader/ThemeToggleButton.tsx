import { CommandBarButton } from "views/components/PageHeader/CommandBarButton";
import { IconProps, DarkTheme, LightTheme } from "views/icons";
import { Theme, useThemeToggle } from "utils/ThemeService";


export function ThemeToggleButton(props: ThemeToggleButtonProps): JSX.Element
{
	const { size } = props;
	const [ theme, toggleTheme ] = useThemeToggle();

	const icon = getThemeIcon(theme);

	return <CommandBarButton icon={icon}
							 iconSize={size}
							 command={toggleTheme} />;
}


interface ThemeToggleButtonProps extends Pick<IconProps, "size">
{
}


function getThemeIcon(theme: Theme)
{
	return theme === Theme.Dark ? LightTheme : DarkTheme;
}