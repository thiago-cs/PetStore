export interface LinkInfo
{
	header: string;
	url: string;
}

export interface LinkInfoGroup
{
	header: string;
	links: LinkInfo[];
}


export function createLinkInfoGroupsFromObject(o: { [key: string]: LinkInfo[] })
{
	return Object.getOwnPropertyNames(o)
				 .map(prop => createLinkInfoGroup(prop, o[prop]));
}

function createLinkInfoGroup(header: string, links: LinkInfo[]): LinkInfoGroup
{
	return { header, links };
}