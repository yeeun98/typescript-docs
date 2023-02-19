
function logText(text) {
    console.log(text);
    return text;
}
logText('a')

function logNumber(number: number) {
    console.log(number);
    return number;
}
const num = logNumber(10);

// 기존 타입 정의 방식은 타입에 따라 동일한 함수를 중복 선언해주어야 한다는 단점이 있어
// 이를 보완하기 위해 아래 유니온 방식으로 이 점을 해결

function logAny(any: string | number) {
    console.log(any);
    any.split("");
    return any;
}
logAny('any function')
logAny(10);

// 유니온 방식은 선언해놓은 타입들이 다르다보니 함수 내에서 타입 API를 사용할 수 없다는 점이 단점
// 위 두 방식의 단점을 해결하고자 제네릭 방식을 사용함

function logGeneric<T>(text: T): T{
    console.log(text);
    return text;
}
const str = logGeneric<string>('yeeun');
str.split('');
const login = logGeneric<boolean>(true);
login.valueOf();