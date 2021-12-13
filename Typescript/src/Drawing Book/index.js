/**
 * ! Not totaly solved. Only get 9.60/10
 * @param n
 * @param p
 * @returns
 */
function pageCount(n, p) {
    return n - p > n / 2 ? Math.floor(p / 2) : Math.floor((n - p) / 2);
}
// console.log(pageCount(5, 4));
module.exports = pageCount;
