var datetime = require('alloy/datetime');
var args = arguments[0] || {};

/* Necessary calculations */
var timestamp = new Date(args.nearby_user.timestamp);
var date = datetime.formatAsShort(timestamp);
if (date.indexOf('/') < 0) {
  date += ' @ ' + datetime.getTime(timestamp);
}

/* Set values for game specific attributes */
$.sport_icon.image = '/images/' + args.sport + '-icon.png';
$.comment_count.text = args.comment_count;
$.date_time.text = date;


/* Action to take when a game is clicked */
function gameClick(e) {
  //alert(args.id);
}

