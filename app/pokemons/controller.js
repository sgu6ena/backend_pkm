import PokemonService from './service.js'

class PokemonController {
  async create(req, res) {
    try {
      const pokemon = await PokemonService.create(req.body, req.files.picture)
      res.json(pokemon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getAll(req, res) {
    try {
      const pokemons = await PokemonService.getAll();
      res.json(pokemons);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
  async getByTypeId(req, res) {
    try {
      const pokemons = await PokemonService.getByTypeId(req.params.id);
      res.json(pokemons);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async getOne(req, res) {
    try {
      const pokemon = await PokemonService.getOne(req.params.id)
      res.json(pokemon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async update(req, res) {
    try {
      const updatedPokemon = await PokemonService.update(req.body)
      return res.json(updatedPokemon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }

  async delete(req, res) {
    try {
      const pokemon = await PokemonService.delete(req.params.id);
      return res.json(pokemon);
    } catch (e) {
      return res.status(500).json(e.message)
    }
  }
}

export default new PokemonController();