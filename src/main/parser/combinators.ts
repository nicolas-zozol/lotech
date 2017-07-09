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

function letterOrBlank(){
    return F.try(C.letter).or(C.char(' '));
}

function lettersOrBlanks(){
    return letterOrBlank().rep().map(x => x.join(''));
}

function title(){
    return C.char('=').rep().drop()
        .then(lettersOrBlanks()).then(eol().drop())
        .map(val => ({title:val.trim()}) );
}

function chapter(){
    return title().then(
        MD.formattedParagraph().optrep()
            .map(val=>({paragraphs:val.array()}) )
    )
}

export default {blank, letterOrBlank,  blanks, lettersOrBlanks, title, chapter};