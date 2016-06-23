import test from 'tape';
import myObject from '../index';


export default  {
    'expect (space) to be accepted':  (test)=>{
        test.expect(1);

        test.equals("bob", "bob", "should be bobby");
        test.done();
    },
    'expect object to have stuff':  (test)=>{
        test.expect(1);

        test.equals(myObject.name, "Object", "should be Object");
        test.done();
    }

}
/*
test('Assert it works', (t) => {

  t.plan(2);
  t.equal(myObject.name.toLowerCase().indexOf('lotech')>=0, true);
  t.equal(myObject.version, '1.0.0');
});
*/