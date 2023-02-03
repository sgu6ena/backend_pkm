import Router from 'express'
import HexagonController from './controller.js'

const hexagonRouter = new Router()

hexagonRouter.post("/hexagons", HexagonController.create)
hexagonRouter.get("/hexagons", HexagonController.getAll)
hexagonRouter.get("/hexagons/:id", HexagonController.getOne)
hexagonRouter.put("/hexagons", HexagonController.update)
hexagonRouter.delete("/hexagons/:id", HexagonController.delete)

export default hexagonRouter