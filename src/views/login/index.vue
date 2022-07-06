<template>
  <el-row class="h-100 login">
    <el-col :span="12">
      <div
        class="h-100 d-flex justify-content-center align-items-center flex-column"
      >
        <h3 class="fs-4">欢迎来到VueAdmin管理系统</h3>
        <div class="wechat my-3">
          <img
            class="w-100 h-100"
            src="https://www.markerhub.com/vueadmin/img/MarkerHub.c059bf19.jpg"
            alt=""
          />
        </div>
        <div
          class="d-flex justify-content-center align-items-center flex-column"
        >
          <span>公众号 MarkerHub</span>
          <span>扫码二维码，回复【 VueAdmin 】获取登录密码</span>
        </div>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="line"></div>
    </el-col>
    <el-col :span="11">
      <div class="d-flex h-100 flex-column justify-content-center">
        <el-form
          ref="LoginForm"
          :rules="loginFormRules"
          :model="loginForm"
          label-width="100px"
          label-position="right"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model.trim="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model.trim="loginForm.password" />
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model.trim="loginForm.code" class="code" />
            <img
              @click="loadCaptcha"
              class="code-img"
              :src="codeImg"
              alt=""
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLoginSubmit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { reactive, ref } from 'vue'
import UserApi from '../../api/user'

const LoginForm = ref('')
const codeImg = ref('')
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
const loginFormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
}

const handleLoginSubmit = () => {
  LoginForm.value.validate(async (valid) => {
    // if (!valid) return
    console.log(valid)
  })
}

const loadCaptcha = async () => {
  const response = await UserApi.getCaptcha()
  // console.log(response)
  codeImg.value = response.captchaImg
  loginForm.token = response.token
}

loadCaptcha()
</script>
<style scoped lang="scss">
.login {
  background-color: #fafafa;
}
.wechat {
  width: 180px;
  height: 180px;
}
.line {
  width: 2px;
  height: 200px;
  background-color: #eee;
  margin-top: 250px;
}
.el-form {
  width: 410px;

  .el-input {
    height: 40px;
  }

  .code {
    width: 175px;
    margin-right: 10px;
  }

  .code-img {
    border-radius: 4px;
  }
}
</style>
