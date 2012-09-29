function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null);
    $.__views.win1 = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win1"
    }), "Window", null);
    $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        color: "#ffffff",
        text: "Label 1",
        id: "__alloyId1"
    }), "Label", $.__views.win1);
    $.__views.win1.add($.__views.__alloyId1);
    $.__views.__alloyId2 = A$(Ti.UI.createButton({
        title: "Say Hello",
        id: "__alloyId2"
    }), "Button", $.__views.win1);
    $.__views.win1.add($.__views.__alloyId2);
    $.__views.tab1 = A$(Ti.UI.createTab({
        window: $.__views.win1,
        id: "tab1"
    }), "Tab", null);
    $.__views.index.addTab($.__views.tab1);
    $.__views.__alloyId3 = Alloy.createController("nearbyTab", {
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId5 = Alloy.createController("myGamesTab", {
        id: "__alloyId5"
    });
    $.__views.index.addTab($.__views.__alloyId5.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId7 = Alloy.createController("profileTab", {
        id: "__alloyId7"
    });
    $.__views.index.addTab($.__views.__alloyId7.getViewEx({
        recurse: !0
    }));
    $.addTopLevelView($.__views.index);
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;