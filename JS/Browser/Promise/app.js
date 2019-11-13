/*function add(a, b, cb) {
  if (typeof a != "number") {
    cb("please pass a number", null);
  } else {
    let ad = a + b;
    cb(null, ad);
  }
}

function square(n, cb) {
  if (typeof n != "number") {
    cb("Square accepts a number", null);
  } else {
    cb(null, n * n);
  }
}

add(10, 20, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    square(data, function(err, sqData) {
      if (err) {
        console.log(err);
      } else {
        console.log(sqData);
      }
    });
  }
});
*/

function add(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a != "number") {
      reject(new Error("pass a number"));
    } else {
      resolve(a + b);
    }
  });
}

function square(n) {
  return new Promise(function(resolve, reject) {
    if (typeof n != "number") {
      reject(new Error("square accepts a number"));
    } else {
      resolve(n * n);
    }
  });
}

/*
add(10, 20)
  .then(dt => {
    console.log(dt);
  })
  .catch(err => {
    console.log(err);
  });

square(5)
  .then(dt => {
    console.log(dt);
  })
  .catch(err => {
    console.log(dt);
  });
*/

add(10, 20)
  .then(dt => {
    console.log(dt);
    return square(dt);
  })
  .then(sqData => console.log(sqData))
  .catch(err => console.log(err));

Promise.all([add(10, 20), square(10)])
  .then(dt => {
    console.log(dt);
  })
  .catch(err => {
    console.log(err);
  });
