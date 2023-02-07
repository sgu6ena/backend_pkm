import Router from 'express'
import PokemonController from './controller.js'

const pokemonRouter = new Router()

pokemonRouter.post("/pokemons", PokemonController.create)
pokemonRouter.get("/pokemons", PokemonController.getAll)
pokemonRouter.get("/pokemons/:id", PokemonController.getOne)
pokemonRouter.get("/pokemons/type/:id", PokemonController.getByTypeId)
pokemonRouter.put("/pokemons", PokemonController.update)
pokemonRouter.delete("/pokemons/:id", PokemonController.delete)

export default pokemonRouter