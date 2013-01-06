var args = arguments[0] || {};

function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.gameComments, {animated: true});
}