function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.profile = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Profile",
        id: "profile"
    }), "Window", null);
    $.__views.__alloyId11 = A$(Ti.UI.createLabel({
        color: "#ffffff",
        text: "Peace out, yo",
        id: "__alloyId11"
    }), "Label", $.__views.profile);
    $.__views.profile.add($.__views.__alloyId11);
    $.__views.profileTab = A$(Ti.UI.createTab({
        window: $.__views.profile,
        title: "Profile",
        id: "profileTab"
    }), "Tab", null);
    $.addTopLevelView($.__views.profileTab);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;