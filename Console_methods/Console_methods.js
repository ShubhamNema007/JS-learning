console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")

for (let i = 0; i < 50; i++) {
  console.log(23)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 50) {
  console.log(23)
  i++;
}

console.timeEnd("whileLoop")