<template>
  <div class="success">
    <h1>サインイン成功</h1>
    <h2>ようこそアドレス名:{{ '' }}さん</h2>
   <button @click="signOut">サインアウト</button>
  </div>
</template>

<script>
export default {
  name: 'success',
  data () {
      return ''
  }
}
</script>