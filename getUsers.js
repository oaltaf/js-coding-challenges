const mavUsers = require('../JSPractice/users');



let i = 0;
console.log(`Total number of users are = ${mavUsers.myusers.length}`);

// while(i<mavUsers.myusers.length){
//     let test = mavUsers.myusers[i].email.replace('@mavrictech.com', '');
//     console.log(`${test} \n`);
//     i++;
// }

mavUsers.myusers.map(res=>{
    console.log(res.email + ' AND ' + res.name + '\n');
    
})