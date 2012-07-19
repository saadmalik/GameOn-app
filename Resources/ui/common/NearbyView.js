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
    left: '9%',
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
      top: 15,
      height: 100,
      layout: 'horizontal',
      zIndex: 99
    });

    var sportIcon = Ti.UI.createImageView({
      image: 'images/soccer-icon.png',
      top: 25,
      left: '1%',
      height: 29,
      zIndex: 99
    });
    row.add(sportIcon);

    var gameInfoBox = Ti.UI.createView({
      backgroundImage: 'images/gameInfoBoxBg.png',
      height: '76',
      width: '75%',
      zIndex: 99
    });
    row.add(gameInfoBox);

    scrollView.add(row);
  }

  return self;
};
