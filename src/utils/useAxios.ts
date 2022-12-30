import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";


export enum Status
{
	Loading,
	Success,
	Error,
}

type State<T> =
{
	status: Status,
	data: T | null,
	prevData: T | null,
	errorMessage: string | null,
};


const initialState: State<any> =
{
	status: Status.Loading,
	data: null,
	prevData: null,
	errorMessage: null,
};


export function useAxios<T>(getItems: ()=>Promise<AxiosResponse<T, any>>): State<T>
{
	const [state, setState] = useState(initialState as State<T>);

	useEffect(() => { fetchItems(); }, [getItems]);

	return state;


	async function fetchItems(): Promise<void>
	{
		const response = await getItems();

		const newState = response.status === 200
					   ? { status: Status.Success, data: response.data, errorMessage: null }
					   : { status: Status.Error, data: null, errorMessage: createErrorMessage(response) };

		setState(oldState => ({ ...newState, prevData: oldState.data }));
	}
}

function createErrorMessage(response: AxiosResponse<any, any>): string
{
	return `${response.status} ${response.statusText}`;
}