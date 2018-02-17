'use strict';

var fs = require('fs-extra');

fs.copy('dist/js/rc-calendar/RangeCalendar.js', 'node_modules/rc-calendar/lib/RangeCalendar.js', function (err) {
  if (err) return console.error(err);
  console.log('File "RangeCalendar.js" was copied to node_modules!');
});
