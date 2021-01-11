require('../db/mongoose')
const User = require('../models/user')

// 5ff3a932281ee012b04b1942

User.findByIdAndUpdate('5ff3a932281ee012b04b1942', { age: 1 }).then((user) => {
    return User.countDocuments({ age: 1 })
}).then((result) => {

}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5ff2efe34323680c3f35d7b4', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})