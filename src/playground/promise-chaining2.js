require('../db/mongoose')
const Task = require('../models/task')

//5ff28f59d3897b08aeb7fc66

// Task.findByIdAndDelete('5ff28f59d3897b08aeb7fc66').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ff3c00e795c2213b03f5175').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})