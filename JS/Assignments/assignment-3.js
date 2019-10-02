//Mutations
function mutations(string1, string2) {
  string1.toLowerCase();
  string2.toLowerCase();
  if (string1 == string2) {
    return true;
  } else {
    return false;
  }
}
console.log(mutations(`abc`, `abc`));
