let surveyAnswers = data;
console.log(surveyAnswers);

let columnName = 'schoenmaat';
let listOfAnswers = [];

for(answer of surveyAnswers){
    console.log('test');
    listOfAnswers.push(answer[columnName]);
}

console.log(listOfAnswers);