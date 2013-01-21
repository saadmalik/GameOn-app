function doClick(e) {
  alert($.label.text);
}
Ti.App.Properties.setBool('has_login', true);
Alloy.globals.tabgroup = $.group;
if (Ti.App.Properties.getBool('has_login', false)) {
  $.group.open();
} else {
  var foo = Alloy.createController('register').getView();
  foo.open();
}
