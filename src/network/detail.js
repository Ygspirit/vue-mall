import { request } from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export class GoodsInfo {
    constructor(itemInfo, columns, shopInfo) {
      this.title = itemInfo.title
      this.Newprice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      // 优惠价
      this.discountDesc = itemInfo.discountDesc
      this.columns = columns
      this.services = shopInfo.services
      this.discountBgColor = itemInfo.discountBgColor
    }
  }

  export class ShopInfo {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo
      this.name = shopInfo.name
      this.fans = shopInfo.cFans
      this.cSells = shopInfo.cSells
      this.cGoods = shopInfo.cGoods
      this.score = shopInfo.score
    }
  }