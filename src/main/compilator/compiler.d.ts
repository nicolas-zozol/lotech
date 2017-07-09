export interface Compiler<T>{
    compile(content:string):T;
}