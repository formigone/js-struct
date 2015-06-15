/**
 * @param {*} data
 * @constructor
 */
var Node = function(data) {
  this.data = data;
  this.next = null;
};

/**
 * @constructor
 */
var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

/**
 * @param {*} data
 * @param {Node=} next
 */
LinkedList.prototype.add = function(data, next) {
  var node = new Node(data);

  if (next instanceof Node === false) {
    next = null;
  }

  // List is empty
  if (this.length === 0) {
    this.head = node;
    this.tail = node;
    this.length = 1;
  } else {
    var currNode = this.head;

    do {
      // Insert before this node
      if (next instanceof Node && currNode.next === next) {
        currNode.next = node;
        node.next = next;
        this.length += 1;
        return node;
      }

      // Insert at the end, if we're there now
      if (currNode === this.tail) {
        // Special case: currently only 1 item in list => change head + tail
        if (this.head === this.tail) {
          this.head.next = node;
          this.tail = node;
          this.length += 1;
          return node;
        }

        // Reached the end of a list size > 1 => change tail
        else {
          this.tail.next = node;
          this.tail = node
          this.length += 1;
          return node;
        }
      }
    } while (currNode = currNode.next);
  }
};


LinkedList.prototype.delete = function(node) {
  var currNode = this.head;
  var prevNode = currNode;

  do {
    // Found node to be deleted
    if (currNode === node) {
      // Deleting the head node
      if (node === this.head) {
        this.head = currNode.next;
        this.length -= 1;
        return true;
      }

      // Deleting tail
      else if (node === this.tail) {
        this.tail = prevNode;
        prevNode.next = null;
        this.length -= 1;
        return true;
      }

      // Deleting from middle
      else {
        prevNode.next = node.next;
        this.length -= 1;
        return true;
      }
    }

    prevNode = currNode;
  } while (currNode = currNode.next);

  return false;
};


LinkedList.prototype.has = function(node, comparator) {
  var currNode = this.head;

  do {
    var has = comparator(currNode, node);
    if (has) {
      return true;
    }
  } while (currNode = currNode.next);

  return false;
};


LinkedList.prototype.clear = function(){
  if (this.length > 0) {
    while (this.head = this.head.next);
    this.tail = null;
    this.length = 0;

    return true;
  }

  return false;
};


LinkedList.prototype.toString = function(){
  var currNode = this.head;
  do {
    console.log(currNode.data);
  } while (currNode = currNode.next);
};
