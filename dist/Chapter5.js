//enum 타입
// 여러가지 값들에 각각 이름을 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: 'test',
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: 'user2',
    role: Role.USER,
    language: Language.english,
};
const user3 = {
    name: 'user3',
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};
