export function compare(a: string, b: string): string {
  if (a.includes("*")) return b;
  if (b.includes("*")) return a;

  const selectors = ["#", "."];

  const metricsA: Record<string, number> = {
    ids: 0,
    classes: 0,
    elements: selectors.includes(a[0]) ? 0 : 1,
  };
  const metricsB: Record<string, number> = {
    ids: 0,
    classes: 0,
    elements: selectors.includes(b[0]) ? 0 : 1,
  };

  const fillMetrics = (
    index: number,
    selector: string,
    metrics: Record<string, number>
  ) => {
    const char = selector[index];
    const nextChar = selector[index + 1];

    if (char == "#") {
      metrics["ids"] = metrics["ids"] + 1;
    }
    if (char == ".") {
      metrics["classes"] = metrics["classes"] + 1;
    }
    if (char == " " && !selectors.includes(nextChar)) {
      metrics["elements"] = metrics["elements"] + 1;
    }
  };

  const lengthA = a.length;
  const lenghtB = b.length;
  const length = lengthA > lenghtB ? lengthA : lenghtB;
  let i = 0;
  while (i < length) {
    if (i < lengthA) fillMetrics(i, a, metricsA);
    if (i < lenghtB) fillMetrics(i, b, metricsB);
    i++;
  }

  if (metricsA.ids > metricsB.ids) return a;
  if (metricsB.ids > metricsA.ids) return b;

  if (metricsA.classes > metricsB.classes) return a;
  if (metricsB.classes > metricsA.classes) return b;

  if (metricsA.elements > metricsB.elements) return a;
  if (metricsB.elements > metricsA.elements) return b;

  return b;
}

// test
// const a = "#foo div#bar.red .none";
// const b = "menu .item #checkout.active";
// const a = "#foo div#bar.red.none";
// const b = "#foo div#bar.red .none";
// const a = "body p";
// const b = "div";
// const a = ".class";
// const b = "#id";
const a = "div.big";
const b = ".small";
// const a = ".a .b";
// const b = ".foo.bar";
console.log(compare(a, b));
