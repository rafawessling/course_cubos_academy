const users = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Charlie", isAdmin: true },
  ];
  
  const adminNames = [];
  
  users.forEach((user) => {
    if (user.isAdmin) {
      adminNames.push(user.name);
    }
  });
  
  console.log(adminNames);

  //-------------------------------------------//

  // exemplo com for of

//   const users1 = [
//     { id: 1, name: "Alice", isAdmin: true },
//     { id: 2, name: "Bob", isAdmin: false },
//     { id: 3, name: "Charlie", isAdmin: true },
//   ];
  
//   const adminNames1 = [];
  
//   for (const user1 of users1) {
//     if (user1.isAdmin) {
//       adminNames1.push(user1.name);
//     }
//   }
  
//   console.log(adminNames1);
  
  

// cd metodo
// cd Array
// node forEach.js