class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((acc, val) => acc + val, 0)
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      const sum = this.sum()
      return this.items.length > 0 ? sum / this.items.length : 0
    }
  }
}

module.exports = SortedList

// const SortedList = new SortedList()
