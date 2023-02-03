import mongoose from "mongoose";

const ThemeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  links: {type: [String], required: true},

});

const Theme = mongoose.model('Theme', ThemeSchema);

export default Theme
