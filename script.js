const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach((element) => {
    if (element.profession === "developer") {
      console.log(element.profession);
    }
  });
}

// 2. Add Data
function addData() {
  let name = prompt("Enter name");
  let age = prompt("Enter age");
  let profession = prompt("Enter profession");

  // console.log(name, age, profession);
  let dataObject = {
    name: name,
    age: parseInt(age),
    profession: profession,
  };
  data.push(dataObject);

  console.log(data);
}

// 3. Remove Admins

function removeAdmin() {
  const newArr = data.filter((data) => data.profession !== "admin");
  console.log(newArr);
}

// 4. Concatenate Array
const array2 = [
  { name: 'imran', age: 26, profession: 'Engineer' }
];

function concatenateArray() {
  const result = data.concat(array2);
  console.log("Concatenated  Array:", result);
}

// 5. Average Age
function averageAge() {
  let totalAge = data.reduce((acc, element) => {
    return acc + element.age;
  }, 0);

  const Average = Math.trunc(totalAge / data.length);

  console.log(Average);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some((person) => person.age > 25);

  if (above25) {
    console.log("True");
  } else {
    console.log("False");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  // Storing Uniq Profession into Set
  const uniqProfession = new Set();

  data.forEach((element) => {
    uniqProfession.add(element.profession);
  });

  // Convert Set to Array
  const resultArr = Array.from(uniqProfession);

  console.log("Distinct Professions:", resultArr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const johnProfession = data.find((element) => element.name === "john");

  if (johnProfession) {
    johnProfession.profession = "Manager";
  }

  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  const developers = data.filter(
    (element) => element.profession === "developer"
  );
  const admin = data.filter((element) => element.profession === "admin");

  const totalDevelopers = developers.length;
  const totalAdmin = admin.length;

  console.log("Total developers", totalDevelopers);
  console.log("Total admins", totalAdmin);
}
