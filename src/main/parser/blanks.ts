import {F, C, N, stream, MD} from 'parser-combinator';

function eol() {
    return C.string('\r\n').or(C.char('\n'));
}

function blank() {
    return C.charIn(' \t');
}

function blanks() {
    return blank().rep();
}
