function solution(clothes) {
    let portion = [{ value: "zero", key: 0 }];
    let newSet = { value: null, key: 1 }
    let tag = true

    for (let i = 0; i < clothes.length; i++) {

        for (let s = 0; s < portion.length; s++) {
            if (portion[s].value === clothes[i][1]) {
                portion[s].key++;
                tag = false
            }
        }

        if (tag) {
            const text = clothes[i][1]
            newSet = {
                value: text,
                key: 1
            }
            portion.push(newSet);
        }

        tag = true
    }

    portion.shift()

    console.log(portion)

    let sort = 0;
    let sum = (2 * portion.length) - 1
    let token = 2 ** (portion.length - 1)
    console.log(token)

    for (let p = 0; p < portion.length; p++) {
        if (portion[p].key > 1) {
            sum += token * (portion[p].key - 1);
            sort = portion[p].key
            console.log(sum)
        }

        if (sort < portion[p].key) {
            console.log("ns")
            token++
            sum += token;
        }

    }

    return sum
}


const clothes = [["yellowhat", "headgear"], ["crowmask", "face"], ["bluesunglasses", "face"], ["green_turban", "headgear"]]
const result = solution(clothes);
console.log(result)