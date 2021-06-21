// function solution(participant, completion) {
//     completion.forEach(x => {
//         const idx = participant.indexOf(x)
//         if (idx !== null) {
//             participant.splice(idx, 1)
//         }
//     })
//     const [ answer ] = participant
//     return answer
// }

function solution(part, comp) {
    let answer = []
    let i = 0
    part.sort()
    comp.sort()

    while ( i < part.length) {
        if (part[i] !== comp[i]) {
            answer.push(part[i])
        }
        i++
    }
    const [result] = answer
    return result
}

const part = ["marina", "josipa", "nikola", "vinko", "filipa"]
const comp = ["josipa", "filipa", "marina", "nikola"]
const result = solution(part, comp)
console.log(result)