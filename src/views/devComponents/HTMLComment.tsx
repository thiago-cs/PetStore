import { createRef, useLayoutEffect } from "react";
import { Action } from "models/Action";


export function HTMLComment(props: HTMLCommentProps): JSX.Element
{
	const shouldInclude = props.includeInProduction || !import.meta.env.PROD;
	const callback = shouldInclude ? effectCallback : () => {};

	useLayoutEffect(callback, []);

	if (!shouldInclude)
		return <></>;


	const ref = createRef<HTMLSpanElement>();
	const text = ` ${props.text?.trim() ?? ""} ${props.children?.trim() ?? ""} `;


	return <span ref={ref} style={{ display: "none" }} />;


	function effectCallback(): Action | void
	{
		if (ref.current === null)
			return;

		const node = ref.current;
		const parent = node.parentNode;
		const comment = window.document.createComment(text);

		try
		{
			if (parent?.contains(node))
				parent.replaceChild(comment, node);
		}
		catch (error)
		{
			console.error(error);
			return;
		}

		return cleanupCallback;


		function cleanupCallback(): void
		{
			parent?.replaceChild(node, comment);
		}
	}
}


interface HTMLCommentProps
{
	text?: string;
	children: string;
	includeInProduction?: boolean;
}

HTMLComment.defaultProps =
{
	showInProduction: false,
};