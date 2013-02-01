var args = arguments[0] || {};

function popWindow(){
  Alloy.globals.tabgroup.activeTab.close($.gameComments, {animated: true});
}

var comments = [
  {
    name:'Bilal Quadri',
    photo:'/images/profilePhotoBilal.png',
    comment: 'Looking forward to an amazing game.',
    commentTime: '24m'
  },
  {
    name:'Bilal Quadri',
    photo: '/images/profilePhotoShomail.png',
    comment: 'Competition looks to be pretty good. I can’t wait to get on the field.',
    commentTime: '12m'
  },
  {
    name:'Imran Jawed',
    photo:'/images/profilePhotoImran.png',
    comment:'I’ve never played soccer a day in my life.  Hope I don’t score in my own goal.',
    commentTime:'3m'
  }
];

var tableData = [];
for (var j = 0; j<15; j++){
  var i = j % 3;
  comments[i].commentTime = j;
  var row = Alloy.createController('comments_row', comments[i]).getView();
  tableData.push(row);
}
$.commentsTable.setData(tableData);

// Event listeners
$.commentText.addEventListener('focus', function(){
  $.commentsTable.scrollToIndex(tableData.length - 1);
  $.gameComments.setBottom('180dp');
});

$.commentText.addEventListener('blur', function(){
  $.gameComments.setBottom(0);
});

$.gameComments.addEventListener('load', function() {
  $.commentText.focus();
});
