/**
 * 인터페이스
 */

interface Person {
    name : string;
    age? : number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

type Func = {
    (): void;
};

// const func: Func = () => {};
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person | number = {
    name: "홍길동",
    sayHi: function () {
        console.log("Hi")
    },
};

person.sayHi();
person.sayHi(1, 2);