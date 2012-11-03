var args = arguments[0] || {};

$.sport_icon.image = '/images/' + args.sport + '-icon.png';
$.comment_count.text = args.comment_count;
$.date_time.text = args.nearby_user.timestamp;
  //{
    //id: '12345',
    //sport: "soccer",
    //distance: '0.2',
    //comment_count: 4,
    //nearby_user: {
      //id: '007',
      //name: 'Saad Malik',
      //photo: '/images/profile-photo.png',
      //timestamp: '101321312'
    //}
  //},


function gameClick(e) {
  alert(args.id);
}

//exports.id = args.id;
