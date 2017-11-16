db.people.mapReduce(
function(){for(var i = 0; i < this.credit.length; i++) {emit(this.credit[i].currency+"_avg", parseFloat(this.credit[i].balance)); emit(this.credit[i].currency+"_sum", parseFloat(this.credit[i].balance))}},
function(key, values){ if (key.endsWith("sum")) {return Array.sum(values)} else {return Array.sum(values)/values.length}},
{query: {$and: [{nationality: "Poland"}, {sex: "Female"}]}, out: "poland_female_credit"}
).find()