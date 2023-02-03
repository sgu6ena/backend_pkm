import Router from 'express'
import TypeController from './controller.js'

const typeRouter = new Router()

typeRouter.post("/types", TypeController.create)
typeRouter.get("/types", TypeController.getAll)
typeRouter.get("/types/:id", TypeController.getOne)
typeRouter.put("/types", TypeController.update)
typeRouter.delete("/types/:id", TypeController.delete)

export default typeRouter