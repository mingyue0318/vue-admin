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
        ref="formRef"
        :model="form_data"
        v-bind="layout"
        :rules="rules"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item has-feedback label="用户名" name="username">
          <a-input
            v-model:value="form_data.username"
            type="account"
            autocomplete="off"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { verifyPhone, validEmail } from "@/utils/tools.js";
export default defineComponent({
  name: "login",
  setup() {
    let validateAccount = async (rule, value) => {
      console.log(value);
      // console.log(formRef.value);

      if (value === "") {
        return Promise.reject("用户名不可为空");
      } else if (!verifyPhone(value) && !validEmail(value)) {
        return Promise.reject("输入正确的用户名");
      } else {
        return Promise.resolve();
      }
      // if (value === "") {
      //   return Promise.reject("Please input the password");
      // } else {
      //   if (formState.checkPass !== "") {
      //     formRef.value.validateField("checkPass");
      //   }

      //   return Promise.resolve();
      // }
    };
    // const formRef = ref();
    const formState = reactive({
      form_data: {
        username: "",
      },
      rules: {
        username: [
          {
            required: true,
            validator: validateAccount,
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
    return {
      ...toRefs(formState),
      layout,
      handleFinish,
      handleFinishFailed,
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
}
.login-wrap {
  width: 50%;
}
</style>
