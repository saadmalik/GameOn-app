function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.myGames = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        title: "My Games",
        id: "myGames"
    }), "Window", null);
    $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        color: "#ffffff",
        text: "Word, son",
        id: "__alloyId7"
    }), "Label", $.__views.myGames);
    $.__views.myGames.add($.__views.__alloyId7);
    $.__views.__alloyId8 = A$(Ti.UI.createLabel({
        color: "#ffffff",
        text: "Label 1",
        id: "__alloyId8"
    }), "Label", $.__views.myGames);
    $.__views.myGames.add($.__views.__alloyId8);
    $.__views.__alloyId9 = A$(Ti.UI.createButton({
        title: "Say Hello",
        id: "__alloyId9"
    }), "Button", $.__views.myGames);
    $.__views.myGames.add($.__views.__alloyId9);
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