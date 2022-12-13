import { useState, useLayoutEffect } from "react";


export default function useWindowSize()
{
	const [ windowSize, setWindowSize ] = useState(getWindowSize());

	useLayoutEffect(() =>
	{
		subscribe();
		return unsubscribe;

		function onWindowSizeChanged()
		{
			setWindowSize(getWindowSize());
		}

		function subscribe()
		{
			window.addEventListener("resize", onWindowSizeChanged);
			// console.log("subscribed to window resize event.");
			
		}

		function unsubscribe()
		{
			window.removeEventListener("resize", onWindowSizeChanged)
			// console.log("unsubscribed from window resize event.");
		}
	}, []);

	return windowSize;
}

function getWindowSize()
{
	return { width: window.innerWidth, height: window.innerHeight };
}