var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ScoreSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    }
})

mongoose.model('highscores', ScoreSchema)