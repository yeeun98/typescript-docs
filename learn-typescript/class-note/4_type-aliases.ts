interface Person {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세호',
    age: 50
}

type MyString = string;
var str2: MyString = 'hello';

type Todo = { id: string, title: string, done: boolean };
function getTodo(todo: Todo){
    
}