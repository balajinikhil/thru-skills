console.log(navigator);

//Info about user agent
console.log(navigator.userAgent);

//acess current location
navigator.geolocation.getCurrentPosition(function(postion) {
  console.log(postion);
});
