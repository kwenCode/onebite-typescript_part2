let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;


let num: number = 10;

let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//num = unknownVar; // 오류 !

//unknownVar * 2 // 오류!

if (typeof unknownVar === "number") {
	// 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
	//어떤 타입인지를 검사하는 걸 타입 가드
  unknownVar * 2;
}

//??? 타입 단언 활용법은 나중에
console.log((unknownVar as string).length) //10