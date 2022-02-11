import S1 from './skills/luban/s1.js'
import S2 from './skills/luban/s2.js'
import S3 from './skills/luban/s3.js'

import Skin1 from './skins/yase/skin1.js'
import Skin2 from './skins/yase/skin2.js'

export default class Luban {
  constructor () {
    this.name = 'luban'
    this.icon = '../../sources/heroes/luban1.png'
    this.skills = [new S1(), new S2(), new S3()]
    this.skins = [new Skin1(), new Skin2()]
  }
}
