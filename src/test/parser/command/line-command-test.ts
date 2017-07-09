import {F, C, N, stream, MD} from 'parser-combinator';

import {namedCommand,textCommand} from '../../../main/parser/command/line-command';


const command='!image: hello.jpg';

let value:any;
let accepted:boolean;

function testLine(combinator,line) {
    const parsing = combinator.then(F.eos.drop()).parse(stream.ofString(line));
    value = parsing.value;
    accepted = parsing.isAccepted();
}


export default {
    setUp: function (done) {
        done();
    },

    'text commandl': function (test) {
        const line = `!image: hello.jpg`;

        testLine(textCommand, line);
        test.ok(
            accepted,
            '   Normal text should not be accepted as a code block'
        );
        const expected = {
            type:'command',
            command:'image',
            text:'hello.jpg'
        };

        test.deepEquals(expected, value);
        test.done();
    },

    'named command with same key': function (test) {
        const line = `!image: hello.jpg`;

        testLine(namedCommand('image'), line);
        test.ok(
            accepted,
            '   Normal text should not be accepted as a code block'
        );
        const expected = {
            type:'command',
            command:'image',
            image:'hello.jpg'
        };

        test.deepEquals(expected, value);
        test.done();
    },

    'named command with different key': function (test) {
        const line = `!image: hello.jpg`;

        testLine(namedCommand('image', 'file'), line);
        test.ok(
            accepted,
            '   Normal text should not be accepted as a code block'
        );
        const expected = {
            type:'command',
            command:'image',
            file:'hello.jpg'
        };

        test.deepEquals(expected, value);
        test.done();
    }
}


