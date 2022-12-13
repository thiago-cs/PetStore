import { useCallback, useState } from "react";

import { debounceSubsequent as debounce } from "./debounce";
import { sleep } from "./sleep";
import { Action } from "../models/Action";


const userThemeKey = "theme";
const themeTransitionClassName = "transitioning-to-theme";
const transitionDuration = 1500;


export enum Theme
{
	Dark = "dark",
	Light = "light",
	Default = Dark,
}

export function initializeAppTheme()
{
	const root = document.documentElement;

	root.classList.add(getSystemTheme());
}

export function useThemeToggle(): [Theme, Action]
{
	const [ theme, setTheme ] = useState(getAppTheme);

	function toggleTheme()
	{
		const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
		setAppTheme(newTheme);
		setTheme(newTheme);
	}

	const memoizedToggle = useCallback(toggleTheme, [theme]);

	return [ theme, memoizedToggle ];
}


function getSystemTheme(): Theme
{
	const storedTheme = localStorage.getItem(userThemeKey) as Theme;

	return Object.values(Theme).includes(storedTheme) ? storedTheme
		 : window.matchMedia("(prefers-color-scheme:dark)").matches ? Theme.Dark
		 : Theme.Light;
}

function getAppTheme(): Theme
{
	const root = document.documentElement;

	return root.classList.contains(Theme.Dark) ? Theme.Dark
		 : root.classList.contains(Theme.Light) ? Theme.Light
		 : Theme.Default;
}

async function setAppTheme(theme: Theme): Promise<boolean>
{
	const oldTheme = getAppTheme();

	if (theme === oldTheme)
		return false;

	localStorage.setItem(userThemeKey, theme);

	enterThemeTransition();

	const root = document.documentElement;
	root.classList.add(theme);

	if (oldTheme !== undefined)
		root.classList.remove(oldTheme);

	await sleep(transitionDuration);
	exitThemeTransition();

	return true;
}


//	#region Theme transition

function enterThemeTransition()
{
	document.documentElement.classList.add(themeTransitionClassName);
}

function exitThemeTransition_Bouncing()
{
	document.documentElement.classList.remove(themeTransitionClassName);
}
const exitThemeTransition = debounce(exitThemeTransition_Bouncing, transitionDuration);

//	#endregion
