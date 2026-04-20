import { Request, Response } from "express"

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json({message: "product"})
  }

  async create(request: Request, response: Response) {
    return response.json({message: request.user?.role})
  }
}

export { ProductsController }
