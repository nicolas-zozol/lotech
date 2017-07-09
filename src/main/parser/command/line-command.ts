import {F, C, N, stream, MD} from 'parser-combinator';

function command() {
    return C.char('!').drop()
        .then(C.text())
        .then(C.char(':').drop())
        .then(C.char(' ').optrep().drop())

}

function textCommand() {

    return command()
        .then(C.text())
        .then(F.eol.drop())
        .map(vals => ({
            type: 'command',
            command: vals[0],
            text: vals[1]
        }));
}


function namedCommand(commandName:string, key=commandName) {

    return command()
        .then(C.string(commandName))
        .then(F.eol.drop())
        .map(values => {
            const result = {
                type: 'command',
                command: values[0]
            };
            result[key] = values[1];
            return result;
        });
}


export {
    textCommand,
    namedCommand
}