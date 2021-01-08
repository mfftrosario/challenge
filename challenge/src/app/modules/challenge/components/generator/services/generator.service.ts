import { Injectable } from '@angular/core';

const NUMROWS = 10;

@Injectable()

export class GeneratorService {
  time: Date = new Date;
  cells = [];
  result = null;
  search = null;
  started;
  constructor () {

    for (let i = 0; i < this.numRows; i++) {
      let obj = [];
      for (let i2 = 0; i2 < this.numRows; i2++) {
        obj.push('')

      }
      this.cells.push(obj)
    }

    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  get numRows() {
    return NUMROWS;
  }

  randowCell() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
  }

  start() {
    setInterval(() => {
      this.generateCells();
    }, 2000);
  }

  generateCells() {
    let count20;
    if (this.search) {
      count20 = 1;
    }

    let i = 0;
    const auxTable = [];
    for (i; i < NUMROWS; i++) {
      let irow = 0;
      let row: string[] = [];
      for (irow; irow < NUMROWS; irow++) {
        row.push(count20 && count20 <= Math.round((NUMROWS * NUMROWS) * 0.20) ? this.search.toUpperCase() : this.randowCell());
        if (count20)
          count20++;
      }
      auxTable.push(row);
    }

    auxTable;

    const myArr = auxTable;
    const oneDimArr = myArr.reduce((a, b) => [...a, ...b], []);
    const shuffledArr = this.shuffle(oneDimArr).sort(() => Math.random() - 0.5);
    const shuffled10DimArr = shuffledArr.reduce((acc, i) => {
      if (acc[acc.length - 1].length >= NUMROWS) {
        acc.push([]);
      }
      acc[acc.length - 1].push(i);
      return acc;
    }, [[]]);
    //this.cells = [["V", "L", "C", "O", "V", "C", "P", "P", "C", "O"], ["S", "C", "C", "C", "C", "M", "T", "I", "S", "E"], ["J", "X", "S", "H", "D", "V", "C", "C", "F", "F"], ["J", "R", "F", "C", "C", "I", "I", "D", "Z", "L"], ["Y", "G", "Q", "C", "S", "J", "N", "M", "Q", "U"], ["P", "T", "N", "H", "Q", "T", "M", "H", "X", "P"], ["T", "C", "V", "R", "C", "C", "C", "B", "C", "K"], ["S", "Y", "C", "K", "O", "C", "C", "Q", "C", "Y"], ["J", "O", "R", "X", "E", "A", "R", "B", "C", "C"], ["J", "N", "U", "U", "C", "C", "N", "X", "W", "B"]]
    //this.cells = [["R", "C", "C", "P", "Y", "Z", "C", "C", "W", "J"], ["J", "T", "Z", "F", "H", "J", "C", "B", "O", "R"], ["O", "H", "E", "Q", "M", "C", "J", "L", "B", "W"], ["X", "O", "Q", "G", "C", "Z", "H", "L", "G", "Z"], ["C", "C", "M", "L", "K", "H", "N", "U", "M", "I"], ["R", "X", "S", "V", "J", "G", "Y", "C", "C", "G"], ["T", "C", "Z", "A", "C", "C", "R", "G", "J", "U"], ["I", "C", "Z", "F", "L", "C", "K", "D", "P", "E"], ["H", "K", "Q", "C", "H", "C", "X", "F", "V", "E"], ["C", "C", "E", "F", "C", "F", "C", "G", "Z", "C"]]

    this.cells = shuffled10DimArr;

    const seconds = this.time.getSeconds().toString();

    let i0 = seconds[1] ? seconds[0] : 0
    let i1 = seconds[1] ? seconds[1] : seconds[0]


    const letters = [this.cells[i1][i0], this.cells[i0][i1]];
    this.result = [0, 0];



    let auxresult = [0, 0]

    this.cells.forEach(w => {
      auxresult[0] += w.filter(w => w === letters[0]).length;
      auxresult[1] += w.filter(w => w === letters[1]).length;
    })

    for (let i = 0; i < auxresult.length; i++) {
      if (auxresult[i] > 9) {
        this.result[i] = this.makeOdd(auxresult[i])
      } else {
        this.result[i] = auxresult[i]
      }
    }
  }

  makeOdd(n) {
    if (n % 2 != 0)
      return 1;

    for (let i = 2; i <= n; i++)

      if ((n % i == 0) && ((n / i) % 2 == 1))
        return i;

  }

  shuffle(a: any) {
    for (var k = 0; k < a.length; k++) {
      var i = a[k].length;
      if (i == 0)
        return false;
      else {
        while (--i) {
          var j = Math.floor(Math.random() * (i + 1));
          var tempi = a[k][i];
          var tempj = a[k][j];
          a[k][i] = tempj;
          a[k][j] = tempi;
        }
        return a;
      }
    }
    return a
  }

}
