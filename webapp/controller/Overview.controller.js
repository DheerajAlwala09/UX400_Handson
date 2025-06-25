sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/syncStyleClass",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,syncStyleClass,JSONModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("student31.sap.training.helloworld.controller.Overview", {
        onInit() {
            var oModel = new JSONModel();
            this.getView().setModel(oModel,"customer");
        },
        onSave: function () {
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "student31.sap.training.helloworld.view.Dialog"
                }).then(function(oDialog){
                    syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
                    return oDialog;
                }.bind(this));
            }
            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
        },
        onCloseDialog: function () {
            this.byId("dialog").close();
        },
        onCustomerChange: function (oEvt){
            var oBinding = oEvt.getParameter("listItem").getBindingContext();
            this.getView().byId("bookingTable").setVisible(true);
            this.getView().byId("bookingTable").setBindingContext(oBinding)
        },
        onFilterCustomers: function(oEvent){
            var aFilter = [];
            var squery = oEvent.getParameter("query");
            if(squery && squery.length >0){
                var oFilter = new Filter("CustomerName",FilterOperator.Contains,squery);
                aFilter.push(oFilter);
            }
            var custBinding = this.byId("customerTable").getBinding("items");
            custBinding.filter(aFilter);
        }
    });
});