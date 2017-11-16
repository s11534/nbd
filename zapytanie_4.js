db.people.find({weight: {$gte:"68", $lt: "71.5"}}).pretty()
db.people.find("this.weight >= 68 && this.weight < 71.5").pretty()