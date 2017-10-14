sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("navegacaoNavegacao.controller.View1", {

		onNextPage: function() {

//			this.getRouter().navTo("secondROUTER");
		

			 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			 oRouter.navTo("secondROUTER"); // nome do router..

		}

	});
});