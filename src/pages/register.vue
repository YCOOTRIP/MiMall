<template>
  <div class="register">
    <div class="container">
      <router-link to="/index"><img src="~@/assets/imgs/login-logo.png" alt="" /></router-link>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="register-form">
          <h3><span class="checked">帐号注册</span></h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="input">
            <input type="text" placeholder="请输入邮箱" v-model="email" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="register">注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="javascript:;">帮助中心</a><span>|</span> <a href="javascript:;">服务支持</a><span>|</span>
        <a href="javascript:;">线下门店</a><span>|</span>
        <a href="javascript:;">关于小米</a>
      </div>
      <p class="copyright">Copyright ©2021 mi.ycootrip.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    register () {
      const { username, password, email } = this
      this.axios
        .post('/user/register', {
          username,
          password,
          email
        })
        .then(() => {
          this.$message.success('注册成功')
          this.$router.push('/login')
        })
        .catch((err) => err)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
.register {
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url('~@/assets/imgs/login-bg.jpg') no-repeat center;
    .container {
      height: 576px;
      .register-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 435px;
        background-color: #ffffff;
        position: absolute;
        bottom: 78px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>
