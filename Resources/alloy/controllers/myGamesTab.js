function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.myGames = A$(Ti.UI.createWindow({
        title: "My Games",
        id: "myGames"
    }), "Window", null);
    $.__views.__alloyId9 = A$(Ti.UI.createLabel({
        text: "Word, son",
        id: "__alloyId9"
    }), "Label", $.__views.myGames);
    $.__views.myGames.add($.__views.__alloyId9);
    $.__views.__alloyId10 = A$(Ti.UI.createLabel({
        text: "Label 1",
        id: "__alloyId10"
    }), "Label", $.__views.myGames);
    $.__views.myGames.add($.__views.__alloyId10);
    $.__views.__alloyId11 = A$(Ti.UI.createButton({
        title: "Say Hello",
        id: "__alloyId11"
    }), "Button", $.__views.myGames);
    $.__views.myGames.add($.__views.__alloyId11);
    $.__views.myGamesTab = A$(Ti.UI.createTab({
        window: $.__views.myGames,
        title: "My Games",
        id: "myGamesTab"
    }), "Tab", null);
    $.addTopLevelView($.__views.myGamesTab);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;