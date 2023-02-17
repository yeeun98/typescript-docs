class Persons {
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

new Persons('김예은', 36);


// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>;
}

// Vue 형식에서도 그렇고 리액트에서도 class를 사용할 일이 많지는 않겠지만
// 기본 형식 구조를 알고자 학습하였음.