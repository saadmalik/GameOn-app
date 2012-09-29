function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.profile = A$(Ti.UI.createWindow({
        title: "Profile",
        id: "profile"
    }), "Window", null);
    $.__views.__alloyId13 = A$(Ti.UI.createLabel({
        text: "Peace out, yo",
        id: "__alloyId13"
    }), "Label", $.__views.profile);
    $.__views.profile.add($.__views.__alloyId13);
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