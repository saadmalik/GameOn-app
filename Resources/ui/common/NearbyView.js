module.exports = function(){
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
      top: 27,
      left: '1%',
      height: 29,
      zIndex: 99
    });
    row.add(sportIcon);

    var gameInfoBox = Ti.UI.createView({
      backgroundImage: 'images/gameInfoBoxBg.png',
      height: '84dp',
      left: -10,
      width: '80%',
    });
    row.add(gameInfoBox);

    var topHalf = Ti.UI.createView({
      layout: 'horizontal',
      bottom: '30%',
      left: -5,
      //backgroundColor: 'red'
    });
    gameInfoBox.add(topHalf);
    
    var profilePic = Ti.UI.createImageView({
      image: '/images/saad.png',
      top: 5,
      bottom: '16%',
    });
    topHalf.add(profilePic);
    
    var textContainer = Ti.UI.createView({
      layout: 'vertical',
      left: -15,
      top: 5,
      backgroundColor: 'green'
    });
    topHalf.add(textContainer);    

    var name = Ti.UI.createLabel({
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
    });
    
    

    textContainer.add(name);
    textContainer.add(gameJoinedLine);
    textContainer.add(newLine);
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
