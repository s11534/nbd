db.people.mapReduce(
function(){emit(this.job, 1)},
function(key, values){return Array.sum(values)},
{out:"uniq"}
).find({}, {_id: 1})

db.people.aggregate([{$group : {_id : "$job"}}])