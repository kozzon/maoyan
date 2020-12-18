<template>
  <div id="container">
    调查问卷
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <!-- 手机号的校验 -->
        <!-- :rules = "[{pattern: 你的正则,message: 不符合正则之后提示的内容}]" -->
      <van-field 
        v-model = "phone"
        name = 'phone'
        placeholder = "请输入手机号码"
        :rules = "[{pattern: phoneReg,message: '手机号码有误，请重填'}]"
      />
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="正则校验"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        placeholder="函数校验"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="value3"
        name="asyncValidator"
        placeholder="异步函数校验"
        :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px;">
        <van-button
          @click="submit"
          round
          block
          type="info"
          native-type="submit"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import {Dialog} from 'vant'
export default {
  beforeRouteLeave(to, from, next) {
    // 表示是否要离开当前路由
    //   next(false)
    Dialog.confirm({
      message: "您确定离开吗？请再次确认是否已经填写好表单了？",
    })
      .then(() => {
        // on confirm
        // then表示就是要离开
        next()
      })
      .catch(() => {
        // on cancel
        // catch表示不离开 
        next(false)
      });
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      phone: '',
      phoneReg: /^1(3|4|5|6|7|8|9)d{9}$/
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    submit() {
      this.$router.push("/home");
    },
  },
};
</script>
