import React from "react";
import { Await } from "react-router-dom";


export function Async<T>(props: AsyncProps<T>): JSX.Element
{
	const { promise, loadingElement, errorElement, children: successElement } = props;

	return (
		<React.Suspense fallback={loadingElement} >
			<Await resolve={promise} errorElement={errorElement} >
				{ successElement }
			</Await>
		</React.Suspense>
	);
}


type AsyncProps<T> =
{
	promise: Promise<T>,
	loadingElement: JSX.Element,
	errorElement?: JSX.Element,
	children: React.ReactNode,
};