import Pokemon from "./schema.js";
import FileService from "../fileService.js";

class PokemonService {
  async create(pokemon, picture) {
    const fileName = FileService.saveFile(picture);
    const createdPokemon = await Pokemon.create({...pokemon, picture: fileName});
    return createdPokemon;
  }

  async getAll() {
    const pokemons = await Pokemon.find();
    return pokemons
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const pokemon = await Pokemon.findById(id);
    return pokemon
  }
  async getByTypeId(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const pokemon = await Pokemon.findById(id);
    return pokemon
  }


  async update(pokemon) {
    if (!pokemon._id) {
      throw new Error("id не указан")
    }
    const updatedPokemon = await Pokemon.findByIdAndUpdate(pokemon._id, pokemon, {new: true})
    return updatedPokemon;

  }

  async delete(id) {
    if (!id) {
      throw new Error("id не указан")
    }
    const pokemon = await Pokemon.findByIdAndDelete(id);
    return pokemon
  }
}

export default new PokemonService()