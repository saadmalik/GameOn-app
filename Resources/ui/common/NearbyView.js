module.exports = function(){
  var self = Ti.UI.createView({
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    backgroundImage: 'images/bg-noise-pattern.png',
    backgroundRepeat: true
  });
    
  var scrollView = Ti.UI.createScrollView({
    layout : 'vertical',
    contentHeight : 'auto',
    scrollType : 'vertical',
  });
  self.add(scrollView);


  return self;
};
