<template>
  <div id="login">
    <a-form
      name="custom-validation"
      ref="formRef"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item has-feedback label="Confirm" name="checkPass">
        <a-input
          v-model:value="formState.account"
          type="account"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item has-feedback label="Password" name="pass">
        <a-input
          v-model:value="formState.pass"
          type="password"
          autocomplete="off"
        />
      </a-form-item>

      <a-form-item has-feedback label="Age" name="age">
        <a-input-number v-model:value="formState.age" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "login",
  setup() {
    const formRef = ref();
    const formState = reactive({
      pass: "",
      checkPass: "",
      age: undefined,
    });
    const rules = {
      pass: [
        {
          required: true,
          validator: validatePass,
          trigger: "change",
        },
      ],
      checkPass: [
        {
          validator: validatePass2,
          trigger: "change",
        },
      ],
      age: [
        {
          validator: checkAge,
          trigger: "change",
        },
      ],
    };
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    };
    return {
      formRef,
      ...formState,
      layout,
      rules,
    };
  },
});
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
}
</style>
