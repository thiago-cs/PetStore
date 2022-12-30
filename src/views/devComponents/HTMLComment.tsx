import { createRef, useLayoutEffect } from "react";

import { Action } from "@/models/Action";


export function HTMLComment(props: HTMLCommentProps): JSX.Element | null
{
	const { includeInProduction, children = "", text = "" } = props;

	const shouldInclude = includeInProduction || !import.meta.env.PROD;
	const comment = ` ${text} ${children} `;
	const callback = shouldInclude ? effectCallback : () => {};

	useLayoutEffect(callback, []);

	if (!shouldInclude)
		return null;


	const ref = createRef<HTMLSpanElement>();


	return <span ref={ref} style={{ display: "none" }} />;


	function effectCallback(): Action | void
	{
		if (ref.current === null)
			return;

		const node = ref.current;
		const parent = node.parentNode;
		const element = window.document.createComment(comment);

		try
		{
			if (parent?.contains(node))
				parent.replaceChild(element, node);
		}
		catch (error)
		{
			console.error(error);
			return;
		}

		return cleanupCallback;


		function cleanupCallback(): void
		{
			parent?.replaceChild(node, element);
		}
	}
}


type HTMLCommentProps =
{
	text?: string,
	children: string,
	includeInProduction?: boolean,
};

HTMLComment.defaultProps =
{
	showInProduction: false,
};