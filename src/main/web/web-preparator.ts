
import {Preparator} from "../compilator/preparator";
export default class WebPreparator implements Preparator {

    prepare(content: string): string {

        const builder = new ContentBuilder(content);
        return builder
            .tranformBrToLf()
            .addLastLfIfNeeded()
            .build();

    }
}


class ContentBuilder {

    constructor(public content: string) {

    }


    tranformBrToLf() {

        this.content = this.content
            .replace(/<br><br>/g, '\n')
            .replace(/<br>/g, '');

        return this;
    }

    private hasLastLf() {
        return this.content.charAt(this.content.length - 1) !== '\n'
    }

    addLastLfIfNeeded() {
        if (this.hasLastLf()) {
            this.content += '\n';
        }

        return this;
    }

    build() {
        return this.content;
    }
}
