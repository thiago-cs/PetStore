import { Outlet } from "react-router-dom";

import { createLinkInfoGroupsFromObject } from "@/models/LinkInfo";
import { PageHeader } from "@/views/components/PageHeader";
import { PageFooter } from "@/views/components/PageFooter";
import { PageSizeIndicator } from "@/views/devComponents/PageSizeIndicator";
import { useScrollToTopEffect } from "@/utils/scrollToTopEffect";
import { settings } from "@/settings";


const footerLinkGroups = createLinkInfoGroupsFromObject(settings.footerLinks);


export function AppShell(): JSX.Element
{
	useScrollToTopEffect();

	return <>
		<PageHeader companyName={settings.companyInfo.name}
					logoPath={settings.companyInfo.logo}
					pages={settings.pages}
					iconSize={settings.header.iconSize} />

		<Outlet />

		<PageFooter linkGroups={footerLinkGroups} />

		<PageSizeIndicator className="fixed bottom-4 right-4 z-50" />
	</>;

}