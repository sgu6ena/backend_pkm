import Router from 'express'
import ThemeController from './controller.js'

const themeRouter = new Router()

themeRouter.post("/themes", ThemeController.create)
themeRouter.get("/themes", ThemeController.getAll)
themeRouter.get("/themes/:id", ThemeController.getOne)
themeRouter.put("/themes", ThemeController.update)
themeRouter.delete("/themes/:id", ThemeController.delete)

export default themeRouter