'use strict';

import test from 'tape';
import myObject from '../index';

test('Assert it works', (t) => {

  t.plan(2);
  t.equal(myObject.name.toLowerCase().indexOf('lotech')>=0, true);
  t.equal(myObject.version, '1.0.0');
});
