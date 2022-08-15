class Team {
  constructor(name) {
    this.name = name
  }
}

class FootballTeam extends Team {
  constructor(name) {
    super(name);
    this.type = "Football";
  }
  touchdown() {
    console.log("Go for two");
  }
}

class HockeyTeam extends Team {
  constructor(name) {
    super(name);
    this.type = "Hockey";
  }

  scoreGoal() {
    console.log("he shoots, he scores");
  }
}



const wings = new HockeyTeam("Red Wings");
wings.scoreGoal();
console.log(wings.name);

const lions = new FootballTeam("Lions");
lions.touchdown();

console.log(wings, lions)
