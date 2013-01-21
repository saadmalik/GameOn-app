var args = arguments[0] || {};

function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.membersJoined, {animated: true});
}

var joinedMembers = [
  {name:'Saad Malik', photo:'/images/game_detail/profilePhotoSaad.png'},
  {name:'Bilal Quadri', photo: '/images/profilePhotoBilal.png'},
  {name:'Imran Jawed', photo:'/images/profilePhotoImran.png'}
];

var tableData = [];
for (var i = 0; i<joinedMembers.length; i++){
  var row = Alloy.createController('members_row', joinedMembers[i]).getView();
  tableData.push(row);
}

$.membersTable.setData(tableData);