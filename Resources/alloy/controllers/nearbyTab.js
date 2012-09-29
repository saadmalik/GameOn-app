function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.nearbyGames = A$(Ti.UI.createWindow({
        title: "Nearby Games",
        id: "nearbyGames"
    }), "Window", null);
    $.__views.__alloyId12 = A$(Ti.UI.createLabel({
        text: "Word, son",
        id: "__alloyId12"
    }), "Label", $.__views.nearbyGames);
    $.__views.nearbyGames.add($.__views.__alloyId12);
    $.__views.nearbyTab = A$(Ti.UI.createTab({
        window: $.__views.nearbyGames,
        title: "Nearby Games",
        id: "nearbyTab"
    }), "Tab", null);
    $.addTopLevelView($.__views.nearbyTab);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;