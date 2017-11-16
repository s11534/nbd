db.people.mapReduce(
function(){emit(this.sex+"_av_weight", parseFloat(this.weight));emit(this.sex+"_av_height", parseFloat(this.height))},
function(key, values){return Array.sum(values)/values.length},
{out: "av"}
).find()