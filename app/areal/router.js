import Router from 'express'
import ArealController from './controller.js'

const arealRouter = new Router()

arealRouter.post("/areals", ArealController.create)

arealRouter.get("/areals", ArealController.getAll)
arealRouter.get("/areals/hexagons", ArealController.getAllWithHexagons)
arealRouter.get("/areals/:id", ArealController.getOne)
arealRouter.put("/areals", ArealController.update)
arealRouter.delete("/areals/:id", ArealController.delete)

export default arealRouter