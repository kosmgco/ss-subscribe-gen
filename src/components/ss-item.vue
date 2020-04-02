<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix marginleft">
            <span>服务器 {{index}}</span>
            <el-link icon="el-icon-close" :underline="false" @click="deleteThis(index)" style="float: right; padding: 3px 0"></el-link>
        </div>
        <el-row :gutter="4">
            <el-col :span="4" class="label">
                <el-tooltip content="server host" placement="top">
                    <label>
                        服务器地址
                    </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-input label="服务器地址" v-model="serverHost" size="small"></el-input>
            </el-col>
            <el-col :span="4" class="label">
                <el-tooltip content="server port" placement="top">
                <label>
                    服务器端口
                </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-input label="服务器端口" v-model="serverPort" size="small"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="4">
            <el-col :span="4" class="label">
                <el-tooltip content="password" placement="top">
                <label>
                    密码
                </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-input label="密码" type="password" v-model="password" size="small"></el-input>
            </el-col>
            <el-col :span="4" class="label">
                <el-tooltip content="method" placement="top">
                <label>
                加密方式
                </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-select v-model="method" value="aes-256-cfb" size="small">
                    <el-option value="aes-128-gcm">aes-128-gcm</el-option>
                    <el-option value="aes-192-gcm">aes-192-gcm</el-option>
                    <el-option value="aes-256-gcm">aes-256-gcm</el-option>
                    <el-option value="aes-128-cfb">aes-128-cfb</el-option>
                    <el-option value="aes-192-cfb">aes-192-cfb</el-option>
                    <el-option value="aes-256-cfb">aes-256-cfb</el-option>
                    <el-option value="aes-128-ctr">aes-128-ctr</el-option>
                    <el-option value="aes-192-ctr">aes-192-ctr</el-option>
                    <el-option value="aes-256-ctr">aes-256-ctr</el-option>
                    <el-option value="camellia-128-cfb">camellia-128-cfb</el-option>
                    <el-option value="camellia-192-cfb">camellia-192-cfb</el-option>
                    <el-option value="camellia-256-cfb">camellia-256-cfb</el-option>
                    <el-option value="bf-cfb">bf-cfb</el-option>
                    <el-option value="chacha20-ietf-poly1305">chacha20-ietf-poly1305</el-option>
                    <el-option value="xchacha20-ietf-poly1305">xchacha20-ietf-poly1305</el-option>
                    <el-option value="salsa20">salsa20</el-option>
                    <el-option value="chacha20">chacha20</el-option>
                    <el-option value="chacha20-ietf">chacha20-ietf</el-option>
                    <el-option value="rc4-md5">rc4-md5</el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row :gutter="4">
            <el-col :span="4" class="label">
                <el-tooltip content="plugin" placement="top">
                <label>
                    插件
                </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-select v-model="plugin" value="simple-obfs" size="small">
                    <el-option value="none">无 / none</el-option>
                    <el-option value="obfs-local">obfs-local</el-option>
                    <el-option value="simple-obfs">simple-obfs</el-option>
                    <el-option value="v2ray-plugin">v2ray-plugin</el-option>
                    <el-option value="kcptun"></el-option>
                </el-select>
            </el-col>
            <el-col :span="4" class="label">
                <el-tooltip content="plugin options" placement="top">
                    <label>
                        插件参数
                    </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-input v-model="pluginOpts" size="small"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" class="label">
                <el-tooltip content="remark" placement="top">
                <label>
                    备注
                </label>
                </el-tooltip>
            </el-col>
            <el-col :span="8">
                <el-input v-model="remark" size="small"></el-input>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
  export default {
    name: "ss-item",
    props: ['index'],
    data () {
      return {
        serverHost: '',
        serverPort: '',
        password: '',
        method: '',
        plugin: '',
        pluginOpts: '',
        remark: ''
      }
    },
    methods: {
      deleteThis (index) {
        this.$emit('delete', index)
      },
      encode () {
        let result = 'ss://'
        result += btoa(this.method + ':' + this.password + '@' + this.serverHost + ':' + this.serverPort)
        result += '@' + this.serverHost + ':' + this.serverPort
        if (this.plugin && this.plugin !== 'none' && this.pluginOpts) {
          result += '/?plugin=' + this.plugin + '%3B' + encodeURIComponent(this.pluginOpts)
        }
        if (this.remark) {
          result += '#' + this.remark
        }
        return result
      }
    }
  }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .label {
        line-height: 2.1;
        text-align: right;
    }

    .el-select {
        width: 100%;
    }

    .el-card {
        margin-bottom: 20px;
    }
    .marginleft {
        text-align: left;
    }
</style>
