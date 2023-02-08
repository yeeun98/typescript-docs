enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0 -> 별도로 선언하지 않으면 숫자형 enum으로 선언됨

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 나이키


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: string) {
    if(answer === 'yes'){
        console.log('정답입니다.');
    }
    if(answer === 'no'){
        console.log('오담입니다.');
    }
}

askQuestion('예스');
askQuestion('y');
askQuestion('yes');

function askQuestion2(answer: Answer) {
    if(answer === Answer.Yes){
        console.log('정답입니다.');
    }
    if(answer === Answer.No){
        console.log('오담입니다.');
    }
}

// enum에서 선언해놓은 값만 매개변수에서 사용이 가능
askQuestion2('예스'); // X
askQuestion2(Answer.Yes); // 0