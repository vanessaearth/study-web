export type itemType={
    id:number,
    name:string
}
//类型别名是从version2.7开始有
export type selectedType={
  selected:boolean
}
//接口形式，和上面没有区别，一开始就有
export interface  selectedType2 {
    selected: boolean
  }
export type itemSelected=itemType&selectedType