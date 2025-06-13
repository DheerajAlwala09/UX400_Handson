sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("student31.sap.training.helloworld.controller.App", {
      onInit() {
         this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }
  });
});