export class Pet {
  constructor(name){
    this.name = name;
    this.hungerLevel = 0;
    this.status;
  }
  introduction(){
    let sayName = () => {
    return `My name is ${this.name}`
  }
  return sayName()
  };

  checkUp(){
    if (this.hungerLevel >= 100){
      this.status = "DEAD";
      return this.status;
    } else {
      this.status = "ALIVE";
      return this.status;
    }
  }

  hunger(){
    setInterval(() => {
      this.hungerLevel++;
      this.checkUp();
      console.log(this.status);
      console.log("Hunger Level: " + this.hungerLevel);
    }, 1000);
  }
  // };

  feed(){
    this.hungerLevel -= 5;
  }

  poop(){
    let poopTime = (Math.random() * 10000);
    setInterval(() => {
      this.hungerLevel += 10;
      console.log("POOP");
    }, poopTime);
  }

  vitals(){
    if (this.status === "DEAD") {
    console.log("SUPER DED");
    // $("#status").text("DEAD DEAD DEAD");
  } else {
    this.hunger();
    this.checkUp();
    this.poop();
  }
}

};
// function checkIfDead() {
//   if (Pet.hungerLevel === 10){
//     console.log("DEAD");
//   } else {
//     console.log("NOT DEAD");
//   }
// };
