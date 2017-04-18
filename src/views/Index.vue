<template>
    <div class="mj">
      <div class="mj-index">
        <div class="module_classify">
            <div class="classify_nav clearfix fixed">
                <ul class="category_nav_list">
                    <li class="nav" v-for="item in header" :class="{'nav-active': item.active}">
                      <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>
                <div class="nav more">
                    <a href="javascript:;">更多分类</a>
                    <i class="icon nav_drop_down_btn"></i>
                </div>
            </div>

            <div class="brand_show">
              <div class="brand_show_cont clearfix">
                  <!--小展位-->
                  <div class="brand_item small_brand_item" v-for="item in list">
                    <div class="show_pro clearfix">
                      <a :href="item.href" target="_blank" class="pro_info">
                        <dl>
                          <dt class="pic">
                            <img :src="item.pic" alt="">                        
                          </dt>
                          <dd class="name">{{item.info}}</dd>
                          <dd class="price">{{'¥' + item.price}}</dd>
                        </dl>
                      </a>
                    </div>
                  </div>
              </div>
            </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      header: [{
        name: '国产食品',
        active: true
      }, {
        name: '进口食品',
        active: false
      }, {
        name: '酒水饮料',
        active: false
      }, {
        name: '母婴玩具',
        active: false
      }, {
        name: '厨卫清洁',
        active: false
      }, {
        name: '家居生活',
        active: false
      }, {
        name: '美容护理',
        active: false
      }, {
        name: '手机数码',
        active: false
      }, {
        name: '电脑办公',
        active: false
      }],
      list: [{
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d7.yihaodianimg.com/N10/M00/A2/51/ChEi2lfqMPKAGHRgAANcLAdIAMI33501_200x200.webp',
        info: '卫龙面筋',
        price: '1.9'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d7.yihaodianimg.com/N10/M05/DA/18/ChEi21jvLmGAJ7g3AAOmh_rvvJA08401_200x200.webp',
        info: '十月稻田',
        price: '55'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d7.yihaodianimg.com/N10/M08/FA/A6/ChEi21gFiP2AfZiWAAMFwmUUXv806601_200x200.webp',
        info: '杏花楼 玫瑰豆沙馅料 500g/袋',
        price: '20'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d6.yihaodianimg.com/N07/M00/01/FE/CgQIz1T-s1KAS-twAAV09WmJ5Wo38701_200x200.webp',
        info: '金龙鱼',
        price: '24.8'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d10.yihaodianimg.com/N09/M02/F7/FF/ChEi2VYncSeAI5duAAHqNVg5q8852901_200x200.webp',
        info: '福临门 葵花籽油',
        price: '54.3'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d8.yihaodianimg.com/N07/M04/00/3A/CgQIz1dfooiALsrZAAKijyCm79g98001_200x200.webp',
        info: '香满园 超级小町 5kg/袋',
        price: '29.9'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d9.yihaodianimg.com/N08/M04/8F/77/ChEi1FhBMGSAUoT2AAX6DL5Mit061601_200x200.webp',
        info: '百草味 芒果干 100g/袋',
        price: '19'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d6.yihaodianimg.com/N05/M09/2E/F1/ChEbulRzBRyAezZAAALGwIsLJFA04901_200x200.webp',
        info: '风筝牌 高筋小麦粉 2.5kg/袋',
        price: '22.9'
      }, {
        href: '//item.yhd.com/item/46470007//item.yhd.com/item/46470007',
        pic: '//d7.yihaodianimg.com/N10/M00/A2/51/ChEi2lfqMPKAGHRgAANcLAdIAMI33501_200x200.webp',
        info: 'weilong',
        price: '19'
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mj {
  width: 100%;
  background: #eee url('../assets/img/bg.jpg') no-repeat 170px 166px;
  &-index {
    width: 1228px;
    margin: 0 auto;
  }
}

.module_classify {
  position: relative;
  background-color: #fff;
  z-index: 100;
  .classify_nav {
    box-shadow: 0 5px 15px #ccc;
    border-bottom: 1px solid #e5e5e5;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    width: 1228px;
    _width: 1238px;
    height: 54px;
    overflow: hidden;
    margin-left: -614px;
    _margin-left: -614px;
    background-color: #fff;
  }

  .category_nav_list {
    float: left;
    width: 1107px;
    _width: 1116px;
    height: 54px;
    overflow: hidden;
  }
  .nav {
    display: block;
    position: relative;
    float: left;
    width: 123px;
    height: 54px;
    margin: 0 0 0 -1px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    cursor: pointer;
    &:before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 124px;
      height: 54px;
      opacity: 0;
      border-right: rgba(229,229,229,1);
      background-color: rgba(229,229,229,1);
      -webkit-transition: all .4s;
      -moz-transition: all .4s;
      -o-transition: all .4s;
      transition: all .4s;
      -webkit-transform: scale(1,0.5);
      transform: scale(1,0.5);
    }

    &:hover {
      &:before {
        opacity: 1;
        -webkit-transform: scale(1,1);
        transform: scale(1,1);
      }
      a {
        position: relative;
        z-index: 2;
        color: #333;
        border-left: 1px solid transparent;
      }
    }

    a {
      display: block;
      width: 123px;
      height: 16px;
      margin-top: 18px;
      border-left: 1px solid #e6e6e6;
      font-family: "simsun";
      line-height: 16px;
      text-align: center;
      cursor: pointer;
    }
  }

  .nav-active {
    position: relative;
    z-index: 1;
    border-right: #444;
    background-color: #444;
    -webkit-transform: scale(1,1);
    transform: scale(1,1);
    a {
      color: white;
    }
  }

  .more {
    width: 121px;
  }

  .brand_show {
    width: 1228px;
    padding-top: 54px;
    overflow: hidden;
    background: #ececec;
    &_cont {
      width: 1250px;
      .brand_item {
        float: left;
        width: 604px;
        margin: 20px 20px 0 0;
      }
      .small_brand_item {
        width: 292px;
      }
      .show_pro {
        background-color: #fff;
        width: 292px;
        height: 320px;
        .pro_info {
          display: block;
          // float: none;
          width: 222px;
          margin: 0 auto;
          padding: 0;
          &:hover {
            img {
              -webkit-transform: translateY(-10px) scale(1.1);
              -moz-transform: translateY(-10px) scale(1.1);
              -ms-transform: translateY(-10px) scale(1.1);
              -o-transform: translateY(-10px) scale(1.1);
              transform: translateY(-10px) scale(1.1);
            }
          }
          dl {
            margin: 0;
            padding: 0;
            list-style: none;
            dt {
              width: 200px;
              height: 200px;
              padding-top: 25px;
              cursor: pointer;
              img {
                -webkit-transition: -webkit-transform .4s ease;
                transition: -webkit-transform .4s ease;
                -moz-transition: -moz-transform .4s ease;
                transition: transform .4s ease;
                cursor: pointer;
              }
            }

            .name {
              height: 34px;
              overflow: hidden;
              margin: 0 auto;
              text-overflow: ellipsis;
              white-space: nowrap;
              line-height: 34px;
              text-align: center;
              cursor: pointer;
            }
            .price {
              height: 22px;
              color: #ed1b2f;
              font-size: 18px;
              font-family: "Verdana";
              line-height: 22px;
              text-align: center;
              cursor: pointer;
            }
          }
        }
      }

    }
  }
}




</style>
