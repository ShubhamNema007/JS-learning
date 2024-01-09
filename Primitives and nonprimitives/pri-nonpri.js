let a = null;
let b = 222;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Shubham"
let f = Symbol("I am a nice symbol")
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof c)

// Non Primitive Data Type - Objects in Js
const item = {
    "Shubham": true,
    "Shubh": false,
    "Rahul": 67,
    "Arjun": undefined
}
console.log(item["Shubh"])