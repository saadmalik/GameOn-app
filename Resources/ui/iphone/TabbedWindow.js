module.exports = (function() {

  var self = Ti.UI.createWindow({
    height: Ti.UI.FILL,
    width: Ti.UI.FILL
  });

  var tabRow = Ti.UI.createView({
    bottom: 0,
    height: 40,
    width: '100%',
    layout: 'horizontal',
    backgroundColor: '#333'
  });

  var tab1 = Ti.UI.createView({
    backgroundColor: '#111',
    width: '33.3%'
  });
  var tab2 = Ti.UI.createView({
    width: '33.3%'
  });
  var tab3 = Ti.UI.createView({
    width: '33.3%'
  });

  var nearby = Ti.UI.createLabel({
    text: 'Nearby',
    color: 'white',
    left: 0
  });
  tab1.add(nearby);

  var mygames = Ti.UI.createLabel({
    text: 'My Games',
    color: 'white',
    left: 0
  });
  tab2.add(nearby);

  var profile = Ti.UI.createLabel({
    text: 'Profile',
    color: 'white',
    left: 0
  });
  tab3.add(nearby);

  tabRow.add(tab1);
  tabRow.add(tab2);
  tabRow.add(tab3);

  self.add(tabRow);

  return self;
})()
