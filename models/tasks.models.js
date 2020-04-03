var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Number
});

taskSchema.method.toJSON = function (){
    return {
        _id:this._id,
        title:this.title,
        description:this.description,
        status:this.status
    }
}
var Task = mongoose.model('Task',taskSchema,'tasks')

module.exports = Task;