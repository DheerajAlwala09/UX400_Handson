/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student31/sap/training/helloworld/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
