function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Logged in");
      resolve("Hello Charchit");
    }, 500);
  });
}

function getData(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Data fetched`);
      resolve(`Data fetched`);
    }, 500);
  });
}

function displayData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(` Displaying Data:`);
      resolve();
    }, 500);
  });
}

function conductTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Conducting Test...");
      resolve("Test Completed");
    }, 500);
  });
}

function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Logged out");
      resolve();
    }, 500);
  });
}
async function main() {
   await login();
   await getData();
  await displayData();
  const testResult = await conductTest();
  console.log("Result:", testResult);
  await logout();
}
main();
