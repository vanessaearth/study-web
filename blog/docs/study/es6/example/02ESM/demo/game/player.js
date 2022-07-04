import Luban from './heroes/luban.js'
import Yase from './heroes/yase.js'

export default class Player {
  constructor (name) {
    this.name = name
    this.heroes = [new Yase(), new Luban()]
  }
}
