import { Timer } from '../src/utilities/Timers';

export class Test {

    @Timer('test 1 method call', true)
    public test1() {

        console.log(123);

    }

}

const test = new Test();
test.test1();