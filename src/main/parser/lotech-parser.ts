import {Parser} from './parser';

import {stream} from 'parser-combinator';
import combinator from './combinators';

export default class LotechParser implements Parser{

    parse(content) {
        const stringStream = stream.ofString(content);
        return combinator.chapter().parse(stringStream);
    }
}

