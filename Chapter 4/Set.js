let set = new Set([1, 2, 3, 3, 3]);
set.add(4)
set.delete(3)
console.log(set.has(3))

for (s of set) {
    console.log(s)
}