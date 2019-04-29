<template>
  <div>
    <!-- <Operation></Operation> -->
    <div class="b_home ">
      <div class="logo clearfix">
        <img src=""
             style="height: 57px;width: 200px;float: left; display: inline-block;"
             alt="">
        <!-- 步骤条 -->
        <el-steps :active="active"
                  style="width:700px;float:right;"
                  finish-status="success">
          <el-step title="拍下商品"></el-step>
          <el-step title="确认收货"></el-step>
          <el-step title="确认收货"></el-step>
        </el-steps>
      </div>
      <!-- 拍下商品 -->
      <div v-show="active === 0">
        <div class="addres">
          <div class="address-top clearfix">
            <p style="float:left;">确认收货地址</p>
            <div style="float:right;"
                 @click="goedit">管理收货地址</div>
          </div>
          <!-- 收货地址选择 -->
          <p>寄送至:</p>
          <ul v-for="(value,index) in address"
              :key="index"
              class="payaddress">
            <li>{{value.address}} ({{value.name}} 收) {{value.phone}}</li>
          </ul>
          <!-- 确认订单信息 -->
          <p style="margin:10px 0;">确认订单信息</p>
          <!-- 商品信息拦 -->
          <el-row :gutter="20"
                  style="text-align:center">
            <el-col :span="6">
              <div class="grid-content bg-purple">商品</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">商品属性</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">单价</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">数量</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">价格</div>
            </el-col>
          </el-row>
          <!-- 商品 -->
          <el-row style="text-align:center;margin-top:20px;height:50px;line-height:50px;vertical-align:middle;"
                  v-for="(value) in commodity"
                  :key="value.id">
            <el-col :span="6">

              <div class="grid-content bg-purple"><img :src="value.img"
                     style="width:50px;height:30px;"
                     alt=""></div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">商品属性</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">{{value.UnitPrice}}</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-input-number v-model="value.number"
                                 @change="handleChange(value)"
                                 size="mini"
                                 :min="1"></el-input-number>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">{{value.totalPrice}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-button style="margin-top: 12px;"
                 @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
// import Operation from '../../components/Operation'
export default {
  components: {
  },
  data () {
    return {
      active: 0,
      /* 收货地址 */
      address: [
        {
          address: '广东省 广州市 天河区 新塘街道 宏太智慧谷6号楼409',
          phone: '13022001673',
          name: '么么么'
        }, {
          address: '广东省 广州市 天河区 新塘街道 宏太智慧谷6号楼409',
          phone: '13022001673',
          name: '么么么'
        }
      ],
      /*  */
      commodity: [
        {
          /* 商品 */
          /* 图片 */
          img: '',
          id: '1001',
          /* 商品类型 */
          type_id: '1',
          /* 商品名称 */
          name: '刀片服务器',
          /* 商品单价 */
          UnitPrice: '40',
          /* 商品数量 */
          number: '2',
          /* 总价 */
          totalPrice: '80'
        },
        {
          /* 商品 */
          /* 图片 */
          img: '',
          id: '1002',
          /* 商品类型 */
          type_id: '2',
          /* 商品名称 */
          name: '刀片服务器',
          /* 商品单价 */
          UnitPrice: '20',
          /* 商品数量 */
          number: '1',
          /* 总价 */
          totalPrice: '20'
        }
      ]
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
    },
    goedit () { },
    next () {
      if (this.active++ > 2) this.active = 0
    },
    /* 计步器事件 */
    handleChange (value) {
      console.log(value)
      this.commodity.filter((v, i) => {
        if (value.id === this.commodity[i].id) {
          /* 循环数组当前的id与数组里id相等时
          取当前的单价和num，相乘取总金额数，在赋值到当前商品的总金额数值中 */
          let price = value.UnitPrice
          let num = this.commodity[i].number
          let allPrice = price * num
          this.commodity[i].totalPrice = allPrice
        }
      })
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 20px auto;
}
/* 地址 */
.payaddress {
  li {
    text-indent: 12px;
    margin: 5px auto;
  }
}
</style>
