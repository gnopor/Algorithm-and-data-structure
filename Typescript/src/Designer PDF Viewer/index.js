function designerPdfViewer(h, word) {
    var alphabets = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    };
    var getHeight = function (character) {
        console.log(character);
        return h[alphabets[character]];
    };
    var maxHeight = word
        .trim()
        .split("")
        .reduce(function (prev, current) {
        return getHeight(current) > prev ? getHeight(current) : prev;
    }, 0);
    return maxHeight * word.trim().length;
}
// // test
// const h = [
//   1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
// ];
// const word = "zaba";
// console.log(designerPdfViewer(h, word));
module.exports = designerPdfViewer;
