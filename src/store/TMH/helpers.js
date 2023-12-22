function debounce(fn, wait) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer); // clear any pre-existing timer
        }
        const context = this; // get the current context
        timer = setTimeout(() => {
            fn.apply(context, args); // call the function if time expires
        }, wait);
    }
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function removeItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
    return array;
}

function asiFromNumbers(c, rs) {
    let abilities = {
        str: -1,
        dex: -1,
        con: -1,
        int: -1,
        wis: -1,
        cha: -1,
    }
    if (c.ability1) {
        let num = Math.max(...rs);
        abilities[c.ability1] = num;
        rs = removeItem(rs, num)
    }
    if (c.ability2) {
        let num = Math.max(...rs);
        abilities[c.ability2] = num;
        rs = removeItem(rs, num)
    }
    if (c.ability3) {
        let num = Math.max(...rs);
        abilities[c.ability3] = num;
        rs = removeItem(rs, num)
    }

    for (const [key, value] of Object.entries(abilities)) {
        if (value === -1) {
            let num = Math.max(...rs);
            abilities[key] = num;
            rs = removeItem(rs, num)
        }
    }
    return abilities;
}

export default {
    debounce: debounce,
    randomIntFromInterval: randomIntFromInterval,
    asiFromNumbers: asiFromNumbers,
}