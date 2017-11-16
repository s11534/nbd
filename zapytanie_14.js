db.people.mapReduce(
function(){emit(this.nationality, parseFloat(this.weight)/Math.pow(parseFloat(this.height)/100, 2))},
function(key, values){return Array.sum(values)/values.length},
{out:"avgbmi"}
).find()