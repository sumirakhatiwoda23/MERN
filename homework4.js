// const users = [
//   { id: 1, name: "Rabin", age: 25, role: "admin", active: true },
//   { id: 2, name: "Sita", age: 22, role: "user", active: false },
//   { id: 3, name: "Hari", age: 30, role: "user", active: true },
//   { id: 4, name: "Gita", age: 28, role: "moderator", active: true },
//   { id: 5, name: "Ram", age: 20, role: "user", active: false }
// ];



// Get all user names as an array.

// Find the user whose id is 3.

// Get all users with role "user".

// Check if at least one user is inactive.

// Count how many users are active.



// Get an array of users older than 25.

// Create a new array where each user has an extra field isAdult (true if age ≥ 18).

// Sort users by age in ascending order.

// Remove the user whose id is 2.

// Get only the names of active users.




// Group users by their role.

// Find the average age of all users.

// Get the first inactive user.

// Convert the array into an object where keys are id and values are user objects.

// Check if all admins are active.



// / Sample users data  ronak subedi le gareko 41.js samma ko ho yo
const users = [
  { id: 1, name: "Alice", age: 25, role: "admin", isActive: true },
  { id: 2, name: "Bob", age: 30, role: "user", isActive: false },
  { id: 3, name: "Charlie", age: 22, role: "user", isActive: true },
  { id: 4, name: "Diana", age: 28, role: "admin", isActive: true },
  { id: 5, name: "Eve", age: 35, role: "user", isActive: false },
  { id: 6, name: "Frank", age: 19, role: "user", isActive: true },
  { id: 7, name: "Grace", age: 27, role: "moderator", isActive: true },
  { id: 8, name: "Henry", age: 16, role: "user", isActive: true },
];

console.log("Original users array:");
console.log(users);

// 1. Get all user names as an array
console.log("\n1. Get all user names as an array:");
const userNames = users.map((user) => user.name);
console.log(userNames);

// 2. Find the user whose id is 3
console.log("\n2. Find the user whose id is 3:");
const userWithId3 = users.find((user) => user.id === 3);
console.log(userWithId3);

// 3. Get all users with role "user"
console.log("\n3. Get all users with role 'user':");
const usersWithRoleUser = users.filter((user) => user.role === "user");
console.log(usersWithRoleUser);

// 4. Check if at least one user is inactive
console.log("\n4. Check if at least one user is inactive:");
const hasInactiveUser = users.some((user) => !user.isActive);
console.log("Has inactive user:", hasInactiveUser);

// 5. Count how many users are active
console.log("\n5. Count how many users are active:");
const activeUsersCount = users.filter((user) => user.isActive).length;
// Alternative using reduce
const activeCountReduce = users.reduce(
  (count, user) => (user.isActive ? count + 1 : count),
  0
);
console.log("Active users count (filter):", activeUsersCount);
console.log("Active users count (reduce):", activeCountReduce);

// 6. Get an array of users older than 25
console.log("\n6. Get an array of users older than 25:");
const usersOlderThan25 = users.filter((user) => user.age > 25);
console.log(usersOlderThan25);

// 7. Create a new array where each user has an extra field isAdult (true if age ≥ 18)
console.log("\n7. Add isAdult field (true if age ≥ 18):");
const usersWithIsAdult = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));
console.log(usersWithIsAdult);

// 8. Sort users by age in ascending order
console.log("\n8. Sort users by age in ascending order:");
const usersSortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(usersSortedByAge);

// 9. Remove the user whose id is 2
console.log("\n9. Remove the user whose id is 2:");
const usersWithoutId2 = users.filter((user) => user.id !== 2);
console.log(usersWithoutId2);

// 10. Get only the names of active users
console.log("\n10. Get only the names of active users:");
const activeUserNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log(activeUserNames);

// 11. Group users by their role
console.log("\n11. Group users by their role:");
const usersByRole = users.reduce((groups, user) => {
  const role = user.role;
  if (!groups[role]) {
    groups[role] = [];
  }
  groups[role].push(user);
  return groups;
}, {});
console.log(usersByRole);

// 12. Find the average age of all users
console.log("\n12. Find the average age of all users:");
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;
console.log("Average age:", averageAge.toFixed(2));

// 13. Get the first inactive user
console.log("\n13. Get the first inactive user:");
const firstInactiveUser = users.find((user) => !user.isActive);
console.log(firstInactiveUser);

// 14. Convert the array into an object where keys are id and values are user objects
console.log("\n14. Convert array to object with id as keys:");
const usersById = users.reduce((obj, user) => {
  obj[user.id] = user;
  return obj;
}, {});
console.log(usersById);

// 15. Check if all admins are active
console.log("\n15. Check if all admins are active:");
const allAdmins = users.filter((user) => user.role === "admin");
const allAdminsActive = allAdmins.every((user) => user.isActive);
console.log("All admins:", allAdmins);
console.log("All admins are active:", allAdminsActive);

// Bonus: Summary statistics
console.log("\n" + "=".repeat(50));
console.log("SUMMARY STATISTICS");
console.log("=".repeat(50));

const stats = {
  totalUsers: users.length,
  activeUsers: users.filter((u) => u.isActive).length,
  inactiveUsers: users.filter((u) => !u.isActive).length,
  averageAge: (users.reduce((sum, u) => sum + u.age, 0) / users.length).toFixed(
    2
  ),
  roleDistribution: users.reduce((dist, u) => {
    dist[u.role] = (dist[u.role] || 0) + 1;
    return dist;
  }, {}),
  ageRange: {
    min: Math.min(...users.map((u) => u.age)),
    max: Math.max(...users.map((u) => u.age)),
  },
};

console.log("Total users:", stats.totalUsers);
console.log("Active users:", stats.activeUsers);
console.log("Inactive users:", stats.inactiveUsers);
console.log("Average age:", stats.averageAge);
console.log("Role distribution:", stats.roleDistribution);
console.log(
  "Age range:",
  `${stats.ageRange.min} - ${stats.ageRange.max} years`
);

console.log("\nAll user manipulation tasks completed!");