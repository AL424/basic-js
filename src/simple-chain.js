const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length) this.chain.splice(position - 1, 1);
    else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    this.chain.forEach((item, index, arr) => {
      if (arr.length === 1) result = `( ${item} )`;
      else if (index === 0) result = `( ${item} )~`;
      else if (index === this.chain.length - 1) result += `~( ${item} )`;
      else result += `~( ${item} )~`;
    })
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
