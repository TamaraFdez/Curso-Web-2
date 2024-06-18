const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title:{
    type: String,
    default: "titulo",
  },
  body: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
 
});

module.exports = Post = mongoose.model('post', PostSchema);