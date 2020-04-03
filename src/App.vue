<template>
  <div id="app">
    <el-container>
      <el-header>
      </el-header>
      <el-main style="width: 100%">
          <el-radio-group v-model="type" size="small" @change="handleClick" style="width: 100%">
            <el-radio-button label="Shadowsocks"></el-radio-button>
            <el-radio-button label="ShadowsocksR"></el-radio-button>
          </el-radio-group>
      </el-main>
      <h1>{{ msg }}</h1>
      <component :is="page" keep-alive height="60%"></component>
      <el-divider></el-divider>
      <el-footer>
        &copy;Copyright
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Shadowsocks from './components/ss.vue'
import ShadowsocksR from './components/ssr'

export default {
  name: 'App',
  components: {
    Shadowsocks,
    ShadowsocksR
  },
  data () {
    return {
      type: localStorage.getItem('ss-sub-gen-page') || 'Shadowsocks',
      page: localStorage.getItem('ss-sub-gen-page') || 'Shadowsocks',
      msg: {
        "Shadowsocks": "Shadowsocks Subscribe Generate",
        "ShadowsocksR": "ShadowsocksR Subscribe Generate",
      }[localStorage.getItem('ss-sub-gen-page') || 'Shadowsocks'],
    }
  },
  methods: {
    handleClick (val) {
      this.page = val
      localStorage.setItem('ss-sub-gen-page', val)
      this.msg = val === 'Shadowsocks' ? 'Shadowsocks Subscribe Generate' : 'ShadowsocksR Subscribe Generage'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  margin: 15px auto;
}
</style>
