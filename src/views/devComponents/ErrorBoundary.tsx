import React from "react";


type ErrorBoundaryState =
{
	hasError: boolean,
};

type ErrorBoundaryProps =
{
	hasError: boolean,
	children: React.ReactNode,
};

export class ErrorBoundary extends React.Component<Partial<ErrorBoundaryProps>, ErrorBoundaryState>
{
	constructor(props: Partial<ErrorBoundaryProps>)
	{
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any)
	{
		// Update state so the next render will show the fallback UI.    
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) 
	{
		// You can also log the error to an error reporting service  
		console.log(error, errorInfo);
	}

	render()
	{
		if (this.state.hasError)
		{
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}