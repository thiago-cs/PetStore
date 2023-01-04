import React, { createContext, useContext, useEffect, useMemo, useState } from "react";


type RenderFallbackContext =
{
	setRenderFallback: (component: React.ReactNode) => void;
}

const context = createContext({} as RenderFallbackContext);


export function RenderFallbackProvider(props: ChildrenProps): JSX.Element
{
	const [component, setComponent] = useState<React.ReactNode>(undefined);
	const value = useMemo(() => ({ setRenderFallback }), [setComponent])

	const { children } = props;
	const { Provider } = context;

	return (
		<Provider value={value} >
			<React.Suspense fallback={component} >
				{ children }
			</React.Suspense>
		</Provider>
	);

	function setRenderFallback(component: React.ReactNode)
	{
		setComponent(component);
	}
}

export function RenderFallback(props: ChildrenProps): JSX.Element
{
	const { setRenderFallback } = useContext(context);
	const { children } = props;
	useEffect(() => setRenderFallback(children), [children]);

	return children;
}


type ChildrenProps =
{
	children: JSX.Element,
};