function randomRange(ourMin, ourMax) {
return Math.floor(Math.random() * (ourMax - ourMin + 1))+ ourMin;
}
randomRange(1,9);

var ourRandom = randomRange(5,15);
console.log(ourRandom);



function checkEqual(a,b) {
if(a===b) {
return true;
}
else {
return false;
}
}
console.log(checkEqual(1,2));



Turnary operator:
function checkEqual(a,b) {
return a === b ? true: false;     or just return a === b;
}
console.log(checkEqual(1,2));

const arr1 = ['JAN', 'FEB', 'MAR'];
let arr2;
(function() {
arr2 = [...arr1];
arr1[0] = 'potato'
}) ();
console.log(arr2);




class Book {
  constructor(author) {
    this._author = author;
  }

  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const toDoList = [
{
id: 1,
text: 'laundry',
isCompleted: true
},

{
id: 2,
text: 'cooking',
isCompleted: false
}
];

const newToDoList = JSON.stringify(toDoList);
console.log(newToDoList);




let costumerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (costumerIsBanned) {
  reply = `No soup for you!`;
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);



switch (2) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 3:
    console.log(3);
    break;

  default:
    console.log(`No match`);
}


  case `rock`:
    if (computer === `paper`) {
      console.log(`Computer wins!`);
    } else {
      console.log(`PlayerOne wins!`);
    }
    break;

  case `paper`:
    if (computer === `scissors`) {
      console.log(`Computer wins!`);
    } else {
      console.log(`PlayerOne wins!`);
    }
    break;

  default:
    if (computer === `rock`) {
      console.log(`Computer wins!`);
    } else {
      console.log(`PlayerOne wins!`);
    }
