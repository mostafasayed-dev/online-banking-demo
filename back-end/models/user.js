const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('invalid password, your passwrod must not contains password word!')
            }
        }
    },
    role: {
        type: String,
        default: "rim"
    },
    status: {
        type: String,
        lowercase: true,
        default: "active"
    },
    rim_no: {
        type: Number
    }
}, {
    timestamps: true
})

userSchema.methods.toJSON = function(){
    const user = this
    const userObj = user.toObject()

    delete userObj.password// no need to return password in response

    return userObj
}

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User