/**
 * Created by nicorama on 18/06/2016.
 */

export default  {
    'expect John to be Johnny':  (test)=>{
        test.expect(1);

        test.equals("johnny", "johnny", "should be Johnny");
        test.done();
    }
}