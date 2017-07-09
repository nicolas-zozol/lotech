/**
 * Created by nicorama on 25/05/2017.
 */
const {stream, F} = require('parser-combinator');
const {blank, letterOrBlank, compile,
    blanks, lettersOrBlanks, title, chapter}=require('../main/parser/compile');

// This is definitively not clean code
let value = undefined;
let accepted = undefined;

function testLine(combinator,line) {
    const parsing = combinator.then(F.eos.drop()).parse(stream.ofString(line));
    value = parsing.value;
    accepted = parsing.isAccepted();
}

exports['stream'] ={
    setUp: function (done) {
        done();
    },


    'test single blank': function (test) {
        const line = ' ';
        testLine(blank(),line);
        test.ok(accepted, 'blank should be accepted');
        test.done();
    },
    'test two blank': function (test) {
        const line = '  ';
        testLine(blanks(),line);
        test.ok(accepted, '2blanks should be accepted');
        test.done();
    },
    'test blank and tab': function (test) {
        const line = ' \t';
        testLine(blanks(),line);
        test.ok(accepted, 'blank and tab should be accepted');
        test.done();
    },

    'test letters and blanks': function (test) {
        const line = 'Some useful text';
        testLine(lettersOrBlanks(),line);
        //console.log('value of lettersOrBlanks', value);
        test.equals(value, line);
        test.done();
    },

    'test title': function (test) {
        const line = '=== Some title\n';
        testLine(title(),line);
        test.ok(accepted, 'Title should be accepted');
        test.deepEqual({title:'Some title'}, value, 'title has wrong value')
        test.done();
    },

    'test chapter': function (test) {
        const line = '=== Some title\nOne Paragraph\n\nAnother *Par*agraph\n\n';
        testLine(chapter(),line);
        //console.log(value[1].paragraphs[0])
        test.ok(accepted, 'Title should be accepted');

        test.ok(value[0].title !== undefined, 'no title')
        test.equal(value[1].paragraphs[0].paragraph[0].text, 'One Paragraph', 'Wrong paragraph')
        test.done();
    }



}

