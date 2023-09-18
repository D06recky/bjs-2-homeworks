class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state *= 1.5;
	}


	set state(newstate) {
		if (newstate < 0) {
			this._state = 0;
		} else if (newstate > 100) {
			this._state = 100;
		} else {
			this._state = newstate;
		}
	}

	get state() {
		return this._state;
	}


}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);

		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice([i], 1)[0];
			}
		}
		return null
	}
}


//================доп

class Student {
  constructor (name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    this.marks = {}
  }
  setSubject (subjectName) {
    return subjectName
  }
  addMark (mark, subjectName) {
    if (this.marks !== undefined) {
      let arr = [],
        m = []
      arr.push(subjectName)
      if (mark >= 2 && mark <= 5) {
        for (const key of arr) {
          if (this.marks[subjectName] === undefined) {
            Object.assign(this.marks, { [key]: [] })
            this.marks[subjectName].push(mark)
          } else {
            this.marks[subjectName].push(mark)
          }
        }
      }
      return this.marks[subjectName]
    } 
  }
  getAverageBySubject (subjectName) {
    let sum = 0
    let l = 0
    for (const key in this.marks) {
      if (key !== subjectName) {
        return 0
      } else {
        return this.marks[key].reduce(
          (acc, item, index, arr) => acc + item / arr.length,
          0
        )
      }
    }
  }
  getAverage () {
    let quantity = 0,
      sum = 0
    let arr = []
    arr = Object.keys(this.marks)
    for (let i = 0; i < arr.length; i++) {
      quantity += arr.length
      sum += this.marks[arr[i]].reduce((acc, item, index, arr) => acc + item, 0)
    }
    if (quantity === 0) {
      return 0
    } else {
      return sum / quantity
    }
  }
}

let student1 = new Student('Alex', 'male', 31)
let student2 = new Student('Benjamin', 'male', 79)

let student = new Student('Josephine', 'female', 24)
student.setSubject('A')