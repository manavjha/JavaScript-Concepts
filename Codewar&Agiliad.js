// Codewards JavaScript Challenge
/**
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */

const LikesCoun = (arrys) => {
    if (arrys.length === 0) {
      return 'no one likes this';
    }
    if (arrys.length === 1) {
      return `${arrys[0]} likes this`;
    }
    if (arrys.length === 2) {
      const [first, second] = arrys;
      return `${first} and ${second} likes this`;
    }
    if (arrys.length >= 4) {
      const [first, second] = arrys;
      return `${first},${second} and ${arrys.length - 2} likes this`;
    }
  };
  console.log(LikesCoun(['manu', 'keshav', 'Uddhav', 'punit', 'udit']));
  // who's Online ?
  /** Description:
  You have a group chat application, but who is online!?
  You want to show your users which of their friends are online and available to chat!
  Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
  If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
  The input data has the following structure: 
  
   */
  const users = [
    {
      username: 'David',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ];
  const R = users.reduce(
    (all, item) => {
      const { username, status, lastActivity } = item;
      console.log(username, status, lastActivity);
      if (status === 'online') {
        all.online.push(username);
      }
      if (status === 'offline') {
        all.offline.push(username);
      }
      if (status === 'online' && lastActivity >= 600) {
        all.away.push(username);
      }
      return all;
    },
    { online: [], offline: [], away: [] }
  );
  console.log('who is Online?', R.online);
  console.log('who is Offline?', R.offline);
  // Array Question
  const A = [2, 4, 0, 100, 4, 11, 2602, 36];
  const B = A.reduce((all, item) => {
    if (all % 2 === 0) {
      all = item;
    }
    return all;
  }, 0);
  console.log(B);
  // Agiliad Interview
  //console.log(addDashBetweenEven('025468')); // '0-254-6-8'
  // currying - add(2)(3)(4)(5) - dynamic arguments,
  // Solution: const add = a => b => b ? add(a + b) : a;
  // unique value from array
  // for(var i=0; i<10; i++) {setTimeout(() => {console.log(i)}, 500) } o/p : 10 time times, bcz of var
  const addDashBetweenEven = (str) => {
    const strAr = [...str];
    let output = '';
    for (let i = 0; i < strAr.length; i++) {
      if (strAr[i] % 2 === 0 && strAr[i + 1] % 2 === 0) {
        output += strAr[i] + '-';
      } else {
        output += strAr[i];
      }
    }
    return output;
  };
  
  console.log(addDashBetweenEven('025468')); // '0-254-6-8'
  //console.log(addDashBetweenEven('123546')); // '12354-6'
  
  // function currying and promise  solution
  const add = (a) => (b) => b ? add(a + b) : a;

function add1(a) {
  return function (b) {
    return b ? add1(a + b) : a;
  };
}
console.log(add(5)(5)(5)());
//cofeee.io
const MaxSum = (arr, k) => arr.slice(k).reduce((all, item) => all + item);
const BAA = [1, 4, 0, 10, 20, 30, 40, 50];
console.log('MaxSum', MaxSum(BAA, 3));
const str = 'Mozilla';

console.log(str.substring(1, 3));

const obj2 = { name: 'manu' };
console.log(JSON.parse(JSON.stringify(obj2)) == obj2);

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('get rejected')
      resolve({ id: 1, name: 'manu', age: 35 });
    }, 500);
  });
};

const getDataById = (id) => {
  if (id === 1) {
    return new Promise((resolve, reject) => {
      //  reject('Error')
      resolve([
        { Organization: 'EY', Data: 'Fox1', Technology: 'Front End' },
        {
          Organization: 'Apple',
          Data: 'Fox Dog',
          Technology: 'Lead Front End',
        },
      ]);
    });
  }
};
// call the function with then and catch.
getData()
  .then((data) => {
    return getDataById(data.id);
  })
  .then((dat) => console.log(dat))
  .catch((err) => console.log(err));
