var datetime = require('alloy/datetime');
var args = arguments[0] || {};




// Necessary calculations
var timestamp = new Date(args.nearby_user.timestamp);
var date = datetime.formatAsShort(timestamp);
date += ' at ' + datetime.getTime(timestamp);
var sport = args.sport;
sport = sport.charAt(0).toUpperCase() + sport.slice(1);




// Set values for game specific attributes
$.sport_icon.image = '/images/sport_icons/'+args.sport+'.png';
$.comment_count.text = args.comment_count;
$.date_time.text = date;
$.profile_photo.image = args.nearby_user.photo;
$.name.text = args.nearby_user.name;
$.game_type.text = sport;
$.distance.text = args.distance;
$.headcount.text = args.spots;




/* Action to take when a game is clicked */
function gameClick(e) {
  alert(sport);
}
