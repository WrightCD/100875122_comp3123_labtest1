/*
Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to delayedSuccess and resolves a
message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to delayedException and rejects an
error message after a timeout of 500ms.
o Call both promises separately and handle the resolved and reject results and then output
to the console
*/

function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "resolved promise!" });
      reject({ message: "cannot resolve promise" });
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("delayed exception!"));
    }, 500);
  });
}

resolvedPromise()
  .then((respromise) => {
    console.log(respromise);
  })
  .catch((error) => {
    console.log(error);
  });

rejectedPromise()
  .then((placeholder) => {
    console.log(placeholder);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
