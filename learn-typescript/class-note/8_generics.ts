function logText(text) {
    console.log(text);
    return text;
}

logText('안농!');  // 문자열 : 안뇽!
logText(10);       // 숫자   : 10
logText(true);     // 진위값 : true

function logText2<T>(text: T):T {
    console.log(text);
    return text;
}
logText2<string>('하이');