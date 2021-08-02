<!--
 * @Author: your name
 * @Date: 2021-07-26 21:21:06
 * @LastEditTime: 2021-07-26 21:49:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin/src/views/login/Index.vue
-->
<template>
  <div id="login">
    <div class="login-wrap">
      <a-form
        name="custom-validation"
        :model="form_data"
        ref="formRef"
        v-bind="layout"
        :rules="rules"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item has-feedback :label="$t('login.User')" name="username">
          <a-input
            v-model:value="form_data.username"
            type="account"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback label="Password" name="pass">
          <a-input
            v-model:value="form_data.pass"
            type="password"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit">button </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div>
      <router-link to="./register" class="link">注册新用户</router-link> |
      <router-link to="./forget" class="link">忘记密码</router-link>
    </div>
    <a-button type="primary" @click="axios">button </a-button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
import { verifyPhone, validEmail, isPasswd } from "@/utils/tools.js";
import { getDate } from "@/api/http";
export default defineComponent({
  name: "Login",
  setup() {
    const { ctx, proxy } = getCurrentInstance();
    const validateUser = async (rule, value) => {
      console.log(value);
      // console.log(formRef.value);

      if (value === "") {
        return Promise.reject("用户名不可为空");
      } else if (!verifyPhone(value) && !validEmail(value)) {
        return Promise.reject("输入正确的用户名");
      } else {
        return Promise.resolve();
      }
    };
    const validatePass = async (rule, value) => {
      console.log(value);
      // console.log(formRef.value);

      if (value === "") {
        return Promise.reject("密码不可为空");
      } else if (!isPasswd(value)) {
        return Promise.reject("只能输入6-20个字母、数字、下划线");
      } else {
        return Promise.resolve();
      }
    };
    // const formRef = ref();
    const formState = reactive({
      form_data: {
        username: "",
        pass: "",
      },
      rules: {
        username: [
          {
            required: true,
            validator: validateUser,
            trigger: "change",
          },
        ],
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: "change",
          },
        ],
      },
    });

    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    };
    const handleFinish = (values) => {
      console.log(values, formState);
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    const axios = () => {
      console.log(ctx);
      console.log(proxy);
      getDate({
        func: "mypublish",
        userid: "5d8b133bb502a365450b7e03",
        appsecret: "cPDF@2021",
      });
    };
    return {
      ...toRefs(formState),
      layout,
      handleFinish,
      handleFinishFailed,
      axios,
    };
  },
});
</script>

<style lang="scss" scoped>
#login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.login-wrap {
  width: 50%;
}
</style>
