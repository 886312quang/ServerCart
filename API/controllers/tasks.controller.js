var Task = require('../../models/tasks.models');

module.exports.index = async function (req, res) {
    var tasks = await Task.find();
    res.json(tasks);
};

module.exports.create = async function (req, res, next) {

    const { body } = req;
    if (!body.title) {
        return res.status(422).json({
            errors: {
                title: 'is required',
            },
        });
    }
    if (!body.description) {
        return res.status(422).json({
            errors: {
                description: 'is required',
            },
        });
    }
    if (!body.status) {
        return res.status(422).json({
            errors: {
                status: 'is required',
            },
        });
    }

    const tasks = new Task(body);
    return tasks.save()
        .then(() => res.json({ tasks: tasks.toJSON() }))
        .catch(next);

}

module.exports.getId= async function (req, res ,next) {
    var i= req.params._id;

    var ids = await Task.findById(i);
   
    res.json(ids);  
    next();
}

module.exports.delete = async function (req, res, next) {
    return Task.findByIdAndRemove(req.params._id)
        .then(() => res.sendStatus(200))
        .catch(next);
}
module.exports.put = async function (req, res ,next) {
    var id= req.params._id;
    var task = await Task.findById({_id:id});
    if(task === null){
        var tasks = await Task.create(req.body);
        res.json(tasks);
    }else{
        var tasks = await Task.findByIdAndUpdate({_id:id},(req.body));
        res.json(tasks);
    }
    next();
}

