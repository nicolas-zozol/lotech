"use strict";
exports.__esModule = true;
var parser_combinator_1 = require("parser-combinator");
var line_command_1 = require("../../../main/parser/command/line-command");
var command = '!image: hello.jpg';
var value;
var accepted;
function testLine(combinator, line) {
    var parsing = combinator.then(parser_combinator_1.F.eos.drop()).parse(parser_combinator_1.stream.ofString(line));
    value = parsing.value;
    accepted = parsing.isAccepted();
}
exports["default"] = {
    setUp: function (done) {
        done();
    },
    'text commandl': function (test) {
        var line = "!image: hello.jpg";
        testLine(line_command_1.textCommand, line);
        test.ok(accepted, '   Normal text should not be accepted as a code block');
        var expected = {
            type: 'command',
            command: 'image',
            text: 'hello.jpg'
        };
        test.deepEquals(expected, value);
        test.done();
    },
    'named command with same key': function (test) {
        var line = "!image: hello.jpg";
        testLine(line_command_1.namedCommand('image'), line);
        test.ok(accepted, '   Normal text should not be accepted as a code block');
        var expected = {
            type: 'command',
            command: 'image',
            image: 'hello.jpg'
        };
        test.deepEquals(expected, value);
        test.done();
    },
    'named command with different key': function (test) {
        var line = "!image: hello.jpg";
        testLine(line_command_1.namedCommand('image', 'file'), line);
        test.ok(accepted, '   Normal text should not be accepted as a code block');
        var expected = {
            type: 'command',
            command: 'image',
            file: 'hello.jpg'
        };
        test.deepEquals(expected, value);
        test.done();
    }
};
