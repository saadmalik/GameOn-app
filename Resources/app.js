var global = {
  isAndroid: (Ti.Platform.osname === 'android')
};

(function() {
  
  var Window;
  if (global.isAndroid) {
    Window = require('ui/android/ApplicationWindow');
  }
  else {
    Window = require('ui/iphone/ApplicationWindow');
  }

  var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
  new ApplicationTabGroup(Window).open();

})();
