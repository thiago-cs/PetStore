import { Outlet } from "react-router-dom";

import { createLinkInfoGroupsFromObject } from "@/models/LinkInfo";
import { PageHeader } from "@/views/components/PageHeader";
import { PageFooter } from "@/views/components/PageFooter";
import { PageSizeIndicator } from "@/views/devComponents/PageSizeIndicator";
import { useScrollToTopEffect } from "@/utils/useScrollToTopEffect";
import { settings } from "@/settings";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";


const footerLinkGroups = createLinkInfoGroupsFromObject(settings.footerLinks);


export function AppShell(): JSX.Element
{
	useScrollToTopEffect();

	return (
		<ShoppingCartProvider>
			<PageHeader companyName={settings.companyInfo.name}
						logoPath={settings.companyInfo.logo}
						pages={settings.pages}
						iconSize={settings.header.iconSize} />

			<Outlet />

			<PageFooter linkGroups={footerLinkGroups} />

			<PageSizeIndicator className="fixed bottom-4 right-4 z-50" />
		</ShoppingCartProvider>
	);

}