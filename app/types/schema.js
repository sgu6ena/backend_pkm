import mongoose from "mongoose";

const TypeSchema = new mongoose.Schema({
  title: {type:String, required:true},
  picture: {type:String, required:false},
});

const Type = mongoose.model('Type', TypeSchema);

export default Type
