let obj = {
  nam: `jon`,
  description: function(who) {
    console.log(`hey ` + who + this.nam);
  }
};

// function decscription() {
//   console.log(`hey ` + this.nam);
// }

let obj2 = {
  nam: `snow`
};

obj.description(`dude `);
obj.description.call(obj2, `dude `);
// decscription.call(obj);
// decscription.call(obj2);

//apply();
obj.description.apply(obj2, [`world `]);

//bind();
let desc = obj.description.bind(obj2, [`universe `]);

desc();
