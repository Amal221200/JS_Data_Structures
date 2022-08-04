class HashTable {
    size: number
    table: [[key: string, value: any]][]
    constructor(size: number) {
        this.table = new Array<[[key: string, value: any]]>(size)
        this.size = size
    }

    private hash(key: string) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key: string, value: any) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key: string) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }

        return undefined
    }

    remove(key: string) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                // sameKeyItem[1] = undefined
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        this.table.forEach((val) => {
            console.log(val)
        })
    }
}

const hTable = new HashTable(5)

hTable.set("name", "Amal")
hTable.set("movie", "Shaw")
hTable.set("hero", "Spidey")
hTable.remove("hero")
hTable.set("heor", "Bat")
hTable.display()

// console.log(hTable.get("hero"))