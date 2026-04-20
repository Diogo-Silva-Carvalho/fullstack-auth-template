import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"

import { ensureAutenticated } from "@/middlewares/ensureAutenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/",
     ensureAutenticated,
     verifyUserAuthorization(["sale","admin","customer"]),
     productsController.create)

export { productsRoutes }
