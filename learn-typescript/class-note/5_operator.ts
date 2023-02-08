// function logMesssage(value: any){
//     console.log(value);
// }
// logMesssage('hello');
// logMesssage(100);
// logMesssage(false);


var sehos: string | number | boolean;
sehos = 'yeeunii';
sehos = 25;
sehos = true;

function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 인터페이스 여러개를 유니온 연산자로 선언하게 된다면 공통된 속성만 사용이 가능함
function askSomeone(someone: Developer | Person) {
    someone.name;
    // someone.skill; //  X
    // someone.age;   //  X
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '디벨로퍼', age: 50});

var yeeun: string & number;
// yeeun = 'yeeun is name';

// 인터페이스 여러개를 인터섹션 연산자로 선언하게 된다면 매개변수로 인터페이스들의 모든 속성을 사용해야함
function askSomeones(someone: Developer & Person) {
    someone.name;
    someone.skill; //  0
    someone.age;   //  0
}
// askSomeones({name: '디벨로퍼', skill: ""}); //  X
// askSomeones({name: '디벨로퍼', age: 50}); //  X
askSomeones({name: '디벨로퍼', skill: "", age: 20});
