import Compiler from "./compiler";
import {Preparator} from "./preparator";
import {Parser} from "../parser/parser";
import {OutputBuilder} from "./output-builder";

export default class DefaultCompiler<T> implements Compiler<T>{

    constructor(public preparator: Preparator,
                public parser:Parser,
                public outputBuilder:OutputBuilder<T>){

    }

    compile(content:string):T{
        let worker = this.preparator.prepare(content);
        let ast = this.parser.parse(worker);
        return this.outputBuilder.output(ast);
    }
}