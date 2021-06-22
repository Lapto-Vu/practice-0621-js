function solution(progresses, speeds) {
    var answer = [];
    var portion = [];
    let currentBox = 0;
    let tag = -1;
    
    for(let i=0; i < progresses.length; i++ ) {
        for (let k=1; progresses[i] < 100; k++ ) {
            progresses[i] += speeds[i];
            portion[i] = k;
        }

        if(currentBox < portion[i]) {
            tag++
            currentBox=portion[i]
            answer[tag] = 1
        } else {
            answer[tag]++
        }

    }

    return answer;
}

const prog = [93, 30, 55]
const speed  = [1, 30, 5]
const result = solution(prog, speed)
console.log(result)