import { Model as ObjectionModel } from 'objection'

class Model extends ObjectionModel {
  createdAt: string
  updatedAt: string
  $beforeInsert() {
    this.createdAt = new Date().toISOString()
    this.updatedAt = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }
}

export default Model