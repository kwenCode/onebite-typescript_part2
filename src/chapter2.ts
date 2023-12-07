//배열
let numArr: number[] = [1,2,3];
let strArr: string[] = ["hello","hi","test"];

let boolArr: Array<boolean> = [true, false, true];

let multArr: (string | number)[] = [1, 'hello']

let doubleArr: number[][] = [
    [1,2,3],
    [4,5],
];

// 튜플 - 길이와 타입이 고정된 배열
let tup1:[number, number] = [1,2];

let tup2:[number, string, boolean] = [1, '2', true]

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
  ];