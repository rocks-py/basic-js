const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _arr: [],
  getLength() {
    return this._arr.length;
  },
  addLink(value) {
    if (value === undefined) value = ' ';
    this._arr.push(value);
    console.log(this._arr.map(x => `( ${x} )`).join('~~'))
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || (position < 1 || position > this._arr.length)) 
    {
      this._arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this._arr.splice(position - 1, 1);
    return this; 
  },
  reverseChain() {
    this._arr.reverse();
    return this;
  },
  finishChain() {
    const res = this._arr.map(x => `( ${x} )`).join('~~');
    this._arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};

// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));