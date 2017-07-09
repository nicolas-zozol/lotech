/**
 * Created by nicorama on 08/06/2017.
 */
import lotech from '../index';
import WebPreparator from "./web-preparator";
import LotechParser from "../parser/parser";
import WebOutput from "./web-output";

function initLotech() {


    $('.lotech').on('input', function (event) {


        let content = $('.lotech').html();
        content = new WebPreparator().prepare(content);
        const parsing = new LotechParser().parse(content);

        // TODO: could be outside web
        if (parsing.isAccepted()) {
            const astArray =parsing.value;
            displayAst(astArray);
            displayOutput(astArray);
        } else {
            displayError();
            clearOutput();
        }

    });

    function displayAst(astArray){
        $('.json').text(JSON.stringify(astArray));
    }

    function displayOutput(astArray){
        const document: JQuery = new WebOutput().output(astArray)
        clearOutput();
        $('.output').append(document);
    }
    function clearOutput(){
        $('.output').empty();
    }

    function displayError(){
        $('.json').text('Parsing failed');

    }
}