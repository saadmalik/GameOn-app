function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.nearbyWindow = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Nearby Games",
        id: "nearbyWindow"
    }), "Window", null);
    $.__views.__alloyId10 = A$(Ti.UI.createLabel({
        color: "#000000",
        text: "Word, son",
        title: "Nearby Games",
        id: "__alloyId10"
    }), "Label", $.__views.nearbyWindow);
    $.__views.nearbyWindow.add($.__views.__alloyId10);
    $.__views.righty = A$(Ti.UI.createButton({
        title: "Food",
        id: "righty"
    }), "Button", $.__views.nearbyWindow);
    $.__views.nearbyWindow.add($.__views.righty);
    $.__views.nearbyTab = A$(Ti.UI.createTab({
        window: $.__views.nearbyWindow,
        title: "Nearby Games",
        id: "nearbyTab"
    }), "Tab", null);
    $.addTopLevelView($.__views.nearbyTab);
    _.extend($, $.__views);
    $.nearbyWindow.rightNavButton = Ti.UI.createButton({
        title: "Create"
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;