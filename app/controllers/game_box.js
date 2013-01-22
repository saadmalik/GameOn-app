var args = arguments[0] || {};
var moment = require('alloy/moment');
moment.calendar.sameElse = 'MMM D [at] LT';


// Necessary calculations
var date = moment(args.nearby_user.timestamp).calendar();
var sport = args.sport;
sport = sport.charAt(0).toUpperCase() + sport.slice(1);


// TEMPORARY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var timestamp = (Math.floor((Math.random()*100)+1) > 50) ? moment().add('days', 11) : moment().add('days', 1);
date = timestamp.calendar();
// END TEMPORARY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


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
  //alert(sport);
  var foo = Alloy.createController('game_detail', args).getView();
  Alloy.globals.tabgroup.activeTab.open(foo);
}
