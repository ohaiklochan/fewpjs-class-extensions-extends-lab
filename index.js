// Your code here

class Polygon {
    constructor(count) {
        this.count = count
    }

    get countSides() {
        return this.count.length
    }

    get perimeter() {
        return this.count.reduce(((a, b) => a + b), 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.count.find(e => e > (this.perimeter / 2))) {
            return false
        }
        return true
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.count.find(e => e !== (this.perimeter / 4))) {
            return false
        }
        return true
    }

    get area() {
        return (this.perimeter / 4)**2
    }
}