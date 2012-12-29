var args = arguments[0] || {};

Ti.API.info("ARGUMENTS PASSED TO GAME DETAIL: " + JSON.stringify(args));


function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.gameDetail, {animated: true});
}
