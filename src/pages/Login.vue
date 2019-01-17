<template>
  <div class="mr-md-4">
    <div class="row">
      <div class="col-md-4 d-none d-md-block background">
        <img src="@/assets/img/squares-background.svg" alt="background">
        <div class="title"><h1>data<span class="golden">cue</span></h1></div>
        <div class="sub-title">
          <p class="text-center">Automatically personalize your website & email to each visitor.</p>
        </div>
      </div>
      <div class="col d-md-none sm-background">
        <img src="@/assets/img/background-with-squares.svg" alt="background">
        <div class="row title-sm">
          <div class="col"><h1 class="text-center">data<span class="golden">cue</span></h1></div>
        </div>
        <div class="row sub-title-sm">
          <div class="offset-1 col-10"><p class="text-center">Automatically personalize your website & email to each visitor.</p></div>
        </div>
      </div>
      <div class="offset-md-1 col-md-7">
        <div class="row mt-3">
          <div class="offset-xs-3 col">
            <p class="float-md-right text-center">Don't have an account? <router-link to="login" style="color:#FFBE00;">Signup</router-link></p>
          </div>
        </div>
        <div class="row mt-5 align-items-end">
          <div class="col-md-1 d-none d-md-block"><img src="@/assets/img/plants-left.svg" alt="Plants" width="90"></div>
          <div class="col-md-10">
            <h3 class="mb-0 text-center">Sign in to DataCue</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-11"><hr></div>
        </div>
        <div class="row ml-2 mr-2">
          <div class="col-md-11">
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control login-form" id="email" placeholder="Enter email" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control login-form" id="password" placeholder="Password" v-model="password">
              </div>
              <div class="row align-items-center">
                <div class="col">
                  <button type="submit" class="btn btn-golden" v-on:click="login(email, password)">Login</button>
                </div>
                <div class="col-md-3 d-none d-md-block">
                  <img src="@/assets/img/plants-right.svg" alt="Plants" width="90">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .btn-golden {
    background-color: #FFBE00 !important;
    border-color: #FFBE00 !important;
  }
  .btn-golden:hover {
    background-color: #FFBE00 !important;
    border-color: #FFBE00 !important;
  }
  .login-form {
    border: 1px solid lightgrey !important;
  }
  .login-form:focus {
    border: 1px solid #FFBE00 !important;
  }
  .background {
    position: relative;
    text-align: center; 
  }
  .sm-background {
    position: relative;
    text-align: center;
  }
  .title {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sub-title {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title-sm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sub-title-sm {
    position: absolute;
    top: 70vw;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .golden {
    color: #FFBE00;
  }
</style>


<script>
import store from '../store/index';
export default {
  data: function () {
    return {
      email: '',
      password: '',
      baseURI: 'http://localhost:3000'
    };
  },
  methods: {
    login: function(email, password) {
      this.$http.post(`${this.baseURI}/login`, { email, password })
      .then((result) => {
        if(result.data == true) {
          this.$store.commit('authenticate');
          this.$router.push('dashboard');
        }
      });
    }
  }
};
</script>
