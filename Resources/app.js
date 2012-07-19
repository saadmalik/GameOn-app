require('libs/require_patch').monkeypatch(this);

var global = {
  isAndroid: (Ti.Platform.osname === 'android'),
  basePath: (Ti.Platform.osname === 'android' ? 'ui/android/' : 'ui/iphone/')
};

(function() {
  
  var AppTabGroup = require('ui/common/AppTabGroup');

  var Window;
  if (global.isAndroid) {
    Window = require('ui/android/ApplicationWindow');
  }
  else {
    Window = require('ui/iphone/ApplicationWindow');
  }

  new AppTabGroup(Window).open();

})();
