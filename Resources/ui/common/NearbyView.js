module.exports = function(){
  var self = Ti.UI.createScrollView({
    layout : 'vertical',
    contentHeight : 'auto',
    scrollType : 'vertical',
  });

  return self;
};
