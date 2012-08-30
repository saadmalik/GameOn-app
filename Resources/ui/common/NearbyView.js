//Temporary Mock data
var gamesList = [{
  sport : 'soccer',
  id : '12345',
  distance: '0.2',
  comment_count: 4,
  capacity: '11/15',
  nearby_user : {
    id : '007',
    name : 'Saad Malik',
    photo : 'images/profile-photo.png',
    timestamp: '101321312'
  }
}];


module.exports = function(){
  var basePath = Ti.Platform.osname === 'android' ? 'ui/android/' : 'ui/iphone/';
  var GameDetailWindow = require(basePath + 'GameDetailWindow');
  
  var self = Ti.UI.createView({
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    backgroundImage: 'images/bg-noise-pattern.png',
    backgroundRepeat: true
  });
    
  var line = Ti.UI.createView({
    height: Ti.UI.FILL,
    width: '5',
    backgroundColor: '#666',
    opacity: 0.1,
    left: '9%'
  });
  self.add(line);

  var scrollView = Ti.UI.createScrollView({
    layout : 'vertical',
    contentHeight : 'auto',
    scrollType : 'vertical',
    opacity: 1,
    zIndex: 99
  });
  self.add(scrollView);

  for (var i = 0; i < 20; i++) {
    var row = Ti.UI.createView({
      top: 10,
      height: 100,
      layout: 'horizontal',
      zIndex: 99
    });

    var sportIcon = Ti.UI.createImageView({
      image: 'images/soccer-icon.png',
      top: 37,
      left: '1%',
      height: 29,
      zIndex: 99
    });
    row.add(sportIcon);

    var gameInfoBox = Ti.UI.createView({
      backgroundImage: 'images/gameInfoBoxBg.png',
      // height: Ti.UI.FILL,
      right:8
    });
    row.add(gameInfoBox);	
    
    gameInfoBox.addEventListener('click',function() {
      Titanium.API.info('Button Clicked');
      
    });
    
    var dateTimeCommentsBg = Ti.UI.createView({
    	backgroundColor: '#f9f5f2',
    	height:30,
    	width:235,
    	zIndex:999,
    	right:2,
    	bottom:3
    });
    gameInfoBox.add(dateTimeCommentsBg);
    
    var clockIcon = Ti.UI.createImageView({
    	image: 'images/clock.png',
    	width:11,
    	bottom:'6%',
    	left:'8%',
    	zIndex:999
    });
    gameInfoBox.add(clockIcon);
    
    var dateTime = Ti.UI.createLabel({
    	text: 'Today @ 8pm',
    	color: '#b4b1b1', 
    	font: { fontSize:13,fontFamily:'Helvetica Neue' },
    	bottom: '8%',
    	left:'15%',
    	zIndex:999
    });
    gameInfoBox.add(dateTime);
    
    var commentBubble = Ti.UI.createImageView({
    	image: 'images/commentBubble.png',
    	right: '3%',
    	bottom:'6%',
    	height:20,
    	width:22,
    	zIndex:999
    });
    gameInfoBox.add(commentBubble);
    
    var numComments = Ti.UI.createLabel({
    	text: '3',
    	font: { fontSize:11,fontFamily:'Helvetica Neue' },
    	color: '#b4b1b1',
    	textAlign:'center',
    	bottom:'20%',
    	zIndex:999
    });
    commentBubble.add(numComments);
    
    var profilePhoto = Ti.UI.createImageView({
    	image: 'images/profile-photo.png',
    	width: 49,
    	height: 50,
    	left:'7%',
    	top:'7%',
    	zIndex:999
    });
    gameInfoBox.add(profilePhoto);
    
    var userFullName = Ti.UI.createLabel({
    	text: 'Saad Malik',
    	left:'30%',
    	top:'3%',
    	font: { fontSize:13,fontFamily:'Helvetica Neue',fontWeight:'bold' },
    	color: '#666'
    });
    gameInfoBox.add(userFullName);
    
    var gameJoined = Ti.UI.createLabel({
    	text: 'joined a game of Soccer',
    	left:'30%',
    	top:'19%',
    	font: { fontSize:13,fontFamily:'Helvetica Neue' },
    	color: '#959595'
    });
    gameInfoBox.add(gameJoined);
    
    var geoPinIcon = Ti.UI.createImageView({
    	image: 'images/geoPin.png',
    	width:7,
    	height:11,
    	left:'30%',
    	top:'43%'
    });
    gameInfoBox.add(geoPinIcon);
    
    var distance = Ti.UI.createLabel({
    	text: '0.3 mi',
    	font: { fontSize:13,fontFamily:'Helvetica Neue' },
    	color: '#959595',
    	top:'39%',
    	left:'34%'
    });
    gameInfoBox.add(distance);
    
    var userIcon = Ti.UI.createImageView({
    	image: 'images/user.png',
    	width:12,
    	height:11,
    	left:'53%',
    	top:'43%'
    });
    gameInfoBox.add(userIcon);
    
    var capacity = Ti.UI.createLabel({
    	text: '11/15',
    	font: { fontSize:13,fontFamily:'Helvetica Neue' },
    	color: '#959595',
    	top:'39%',
    	left: '59%'
    });
    gameInfoBox.add(capacity);

    /* var topHalf = Ti.UI.createView({
      layout: 'horizontal',
      bottom: '30%',
      left: -5,
      //backgroundColor: 'red'
    });
    gameInfoBox.add(topHalf); */
    
    /* var profilePic = Ti.UI.createImageView({
      image: '/images/saad.png',
      top: 5,
      bottom: '16%',
    });
    topHalf.add(profilePic); */
    
    /* var textContainer = Ti.UI.createView({
      layout: 'vertical',
      left: -15,
      top: 5,
      backgroundColor: 'green'
    });
    topHalf.add(textContainer);    */

    /* var name = Ti.UI.createLabel({
      text: 'Saad Malik',
      color: '#111',
      font: {fontStyle: 'bold', fontSize: '12dp'},
      textAlign: 'left',
      left: 0
    });

    var gameJoinedLine = Ti.UI.createView({
      layout: 'horizontal',
      top: -2,
      left: 0
    });

    var gameJoinedPrefix = Ti.UI.createLabel({
      text: 'joined a game of ',
      color: '#555',
      font: {fontStyle: 'bold', fontSize: '12dp'},
      textAlign: 'left',
      left: 0,
      top: 0
    });
    gameJoinedLine.add(gameJoinedPrefix);

    var gameJoined = Ti.UI.createLabel({
      text: 'Soccer',
      color: '#888',
      font: {fontStyle: 'bold', fontSize: '12dp'},
      textAlign: 'left',
      left: 0,
      top: 0
    });
    gameJoinedLine.add(gameJoined);

    var newLine = Ti.UI.createView({
      width: Ti.UI.FILL,
      backgroundColor: 'blue'
    }); */
    
    

   /* textContainer.add(name);
    textContainer.add(gameJoinedLine);
    textContainer.add(newLine); */
/*
 *    var statsLine = Ti.UI.createView({
 *      layout: 'horizontal',
 *      left: 0,
 *      bottom: 0
 *    });
 *    textContainer.add(statsLine);
 *    
 *    var locationPinImage = Ti.UI.createImageView({
 *      image: '/images/geoPin.png'
 *    });
 *    statsLine.add(locationPinImage);
 *    var distance = Ti.UI.createLabel({
 *      text: '0.3 mi',
 *      font: {fontSize: '12dp'},
 *      left: 0,
 *      color: '#999'
 *    });
 *    statsLine.add(distance);
 *        
 *    var userCountImage = Ti.UI.createImageView({
 *      image: '/images/user.png',
 *      left: 0
 *    });
 *    statsLine.add(userCountImage);
 *
 *    var userCount = Ti.UI.createLabel({
 *      text: '8/12',
 *      font: {fontSize: '12dp'},
 *      left: 0,
 *      color: '#999'
 *    });
 *    statsLine.add(userCount);
 */
    

    scrollView.add(row);
  }

  return self;
};
