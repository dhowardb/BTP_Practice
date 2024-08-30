/*global QUnit*/
import opaTest from "sap/ui/test/opaQunit";
import AppPage from "./pages/AppPage";
import ViewPage from "./pages/RisksPage";

import Opa5 from "sap/ui/test/Opa5";

QUnit.module("Navigation Journey");

const onTheAppPage = new AppPage();
const onTheViewPage = new ViewPage();
Opa5.extendConfig({
	viewNamespace: "rap.custom.risksmanagedcustomui5.view.",
	autoWait: true
});

opaTest("Should see the initial page of the app", async function () {
	// Arrangements
	await onTheAppPage.iStartMyUIComponent({
		componentConfig: {
			name: "rap.custom.risksmanagedcustomui5"
		}
	});

	// Assertions
	onTheAppPage.iShouldSeeTheApp();
	onTheViewPage.iShouldSeeThePageView();


	//Cleanup
	await onTheAppPage.iTeardownMyApp();
});