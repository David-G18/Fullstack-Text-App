import express from 'express'
import Text from '../models/Text'
import { v4 as uuidv4 } from 'uuid'

class TextsModel {
  getTexts = (_req: express.Request, res: express.Response, next: express.NextFunction): void => {
    (async () => {
      const dbTexts = await Text.findAll()

      res.send(dbTexts)
    })().catch((error) => {
      next(error)
    })
  }

  createText = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    (async () => {
      const text = req.body
      await Text.create({
        ...text,
        id: uuidv4()
      })

      res.status(201).send('Texto guardado correctamente')
    })().catch((error) => {
      next(error)
    })
  }

  deleteText = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const id = req.params.id
    Text.destroy({
      where: { id }
    })
      .then(() => res.status(202).send('Texto eliminado correctamente'))
      .catch((error) => {
        next(error)
      })
  }
}

const textsController = new TextsModel()

export default textsController
