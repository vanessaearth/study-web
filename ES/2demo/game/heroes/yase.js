import S1 from './skills/yase/s1.js'
import S2 from './skills/yase/s2.js'
import S3 from './skills/yase/s3.js'

import Skin1 from './skins/yase/skin1.js'
import Skin2 from './skins/yase/skin2.js'

export default class Yase {
  constructor () {
    this.name = 'yase'
    this.icon = '../../sources/heroes/yase1.png'
    this.skills = [new S1(), new S2(), new S3()]
    this.skins = [new Skin1(), new Skin2()]
  }
}
