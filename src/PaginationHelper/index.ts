export default class PaginationHelper {
  private length: number;
  private limit: number;

  constructor(collection: any[], itemsPerPage: number) {
    this.length = collection.length;
    this.limit = itemsPerPage;
  }

  itemCount() {
    return this.length;
  }

  pageCount() {
    return Math.ceil(this.length / this.limit);
  }

  pageItemCount(pageIndex: number) {
    const pageCount = this.pageCount() - 1;

    if (pageIndex < pageCount) return this.limit;
    if (pageIndex > pageCount) return -1;

    return this.length - this.limit * pageCount;
  }

  pageIndex(itemIndex: number) {
    const pageCount = this.pageCount();
    let page = -1;

    if (itemIndex < 0 || itemIndex >= this.length) return page;

    for (let i = 0; i <= pageCount; i += 1) {
      const upperLimit = i * this.limit + this.limit;
      if (itemIndex < upperLimit) {
        page = i;
        break;
      }
    }

    return page;
  }
}

// test
// const arr = ["a", "b", "c", "d", "e", "f"];
// const itemsPerPage = 4;

// const arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24,
// ];
// const itemsPerPage = 10;

const arr: any[] = [];
const itemsPerPage = 10;
let helper = new PaginationHelper(arr, itemsPerPage);

console.log("helper.pageCount() = " + helper.pageCount());
console.log("helper.itemCount() = " + helper.itemCount());
console.log("helper.pageItemCount(1) = " + helper.pageItemCount(1));
console.log("helper.pageItemCount(2) = " + helper.pageItemCount(2));
console.log("helper.pageItemCount(0) = " + helper.pageItemCount(0));

console.log("helper.pageIndex(0) = " + helper.pageIndex(0));
console.log("helper.pageIndex(22) = " + helper.pageIndex(22));
console.log("helper.pageIndex(3) = " + helper.pageIndex(3));
console.log("helper.pageIndex(-1) = " + helper.pageIndex(-1));
console.log("helper.pageIndex(-10) = " + helper.pageIndex(-10));
