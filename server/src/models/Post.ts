import { Model } from "./index"

class Post extends Model {
  static get tableName() {
    return "posts"
  }
}

export default Post