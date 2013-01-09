var args = arguments[0] || {};

function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.membersJoined, {animated: true});
}

// var tableData = [];
// for (var i = 0; i<5; i++){
//   var row = Alloy.createController('members_row').getView();
//   tableData.push(row);
// }

// $.table.setData(tableData);