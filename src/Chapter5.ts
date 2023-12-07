//enum 타입
// 여러가지 값들에 각각 이름을 열거해두고 사용하는 타입

enum Role {
    ADMIN = 10,
    USER,
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name:'test',
    role: Role.ADMIN,
    language: Language.korean,
}

const user2 = {
    name: 'user2',
    role: Role.USER,
    language: Language.english,
}

const user3 = {
    name: 'user3',
    role: Role.GUEST,
}

console.log(user1, user2, user3);