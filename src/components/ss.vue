<template>
    <div class="hello">
        <item v-for="item in items" :index="item" :key="item" @delete="deleteThis" ref="ssItems"></item>
        <el-button type="primary" @click="add">增加服务器</el-button>
        <el-button type="success" @click="encode">生成</el-button>
        <el-divider></el-divider>
        <div>
            {{ result }}
        </div>
    </div>
</template>

<script>
import item from './ss-item'
  export default {
    name: 'ss',
    components: {
      item
    },
    data() {
      return {
        serverHost: '',
        serverPort: '',
        password: '',
        method: '',
        obfs: '',
        obfsOpts: '',
        plugin: '',
        pluginOpts: '',
        result: '',
        items: [1]
      }
    },
    methods: {
      add () {
        this.items.push(this.items.length + 1)
      },
      deleteThis(item) {
        if (this.items.length > 1) {
          this.items.splice(this.items.indexOf(item), 1)
        } else {
          this.$message({
            type: 'warning',
            message: '卡片不能删除'
          })
        }
      },
      encode () {
        let result = ''
        this.$refs.ssItems.forEach(item => {
          result += item.encode() + '\n'
        })
        this.result = btoa(result)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
