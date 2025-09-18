/**
 * Unknown 타입
 */
function unknownExam() {
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}
/**
 * Never 타입
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}
/**
 * Void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log("hi");
    }
    let voidVar = undefined;
}
/**
 * any 타입
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}
export {};
