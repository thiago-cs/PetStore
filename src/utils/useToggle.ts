import { useState } from "react";
import { Action } from "../models/Action";


type NonBoolean<T> = T extends boolean ? never : T;


export function useToggle<T>(initialState: NonBoolean<T>, alternateState: NonBoolean<T>): [T, Action];
export function useToggle(initialState: boolean): [boolean, Action];

export function useToggle(initialState: any, alternateState?: any): any
{
	if (typeof initialState === "boolean")
		alternateState = !initialState;

	const [value, setValue] = useState<boolean>(true);

	return [value ? initialState : alternateState, () => setValue(negateBoolean)];	
}

function negateBoolean(b: boolean): boolean
{
	return !b;
}


/* Type tests

// ✔  The tests below should pass (cause no errors).
useToggle(true);
useToggle(8, 9);
useToggle("8", "9");
useToggle({ color:"red" }, null);
useToggle("false", null);
useToggle(null, "false");
useToggle<string|null>(null, "false");

// ❌  The tests below should cause syntax errors.
useToggle(true, false);
useToggle(true, 8);
useToggle(8, "9");
//*/