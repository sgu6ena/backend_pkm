import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
  title: {type: String, required: true},
  picture: {type: String, required: false},
  description: {type: String, required: true},
  firstType: {type: mongoose.Schema.Types.ObjectId, ref: "Type", required: false},
  secondType: {type: mongoose.Schema.Types.ObjectId, ref: "Type", required: false},
  areal: {type: mongoose.Schema.Types.ObjectId, ref: "Areal"},
  prev: {type: mongoose.Schema.Types.ObjectId, ref: "Pokemon", required: false},
  next: {type: mongoose.Schema.Types.ObjectId, ref: "Pokemon", required: false},
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

export default Pokemon
