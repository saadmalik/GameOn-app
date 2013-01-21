var args = arguments[0] || {};

function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.gameComments, {animated: true});
}

var comments = [
  {
    name:'Bilal Quadri', 
    photo:'/images/profilePhotoBilal.png', 
    comment: 'Looking forward to an amazing game.',
    comTime: '24m'
  },
  {
    name:'Bilal Quadri',
    photo: '/images/profilePhotoShomail.png',
    comment: 'Competition looks to be pretty good. I can’t wait to get on the field.',
    comTime: '12m'
  },
  {
    name:'Imran Jawed', 
    photo:'/images/profilePhotoImran.png',
    comment:'I’ve never played soccer a day in my life.  Hope I don’t score in my own goal.',
    comTime:'3m'
  }
];

var tableData = [];
for (var i = 0; i<comments.length; i++){
  var row = Alloy.createController('comments_row', comments[i]).getView();
  tableData.push(row);
}

$.commentsTable.setData(tableData);