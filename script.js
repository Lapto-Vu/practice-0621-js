function solution(param0) {
    let save= 0;
    let token= 0;
    let slot = []

    for(let i= 0; i < param0.length ; i++) {
        token=0;
        while(token !== -1) {
            save=token;
            token=param0[i].indexOf("/", token+1);
        }

        const sub = param0[i].substr(save+1, 1) +"."+ param0[i].substr(param0[i].length-1,1);
        slot.push(sub)

    }

    return slot
}

const param0 = ["/a/a/b_v1.z", "/b/b/d/c_v5.c", "/d/c/b_v6.z"]
const result = solution(param0)
console.log(result)
