

import {OutputBuilder} from "../compilator/output-builder";
export default class WebOutput implements OutputBuilder<JQuery>{

    output(astArray){


        const output = astArray.reduce( function(document, item){
            if (!item){
                return '';
            }

            // Class Title, Paragraph,
            if (item.title){
                document.append($('<h1>').text(item.title))
            }
            if( item.paragraphs && item.paragraphs.length>0){
                //well, one is not that bad

                const p =$('<div>').text(item.paragraphs[0].paragraph[0].text)
                document.append(p)
            }

            return document;
        },$('<div>'));

        return output;
    };
}
