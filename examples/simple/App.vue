<template>
  <div>
    <h1>Simple Example</h1>
    <div>
      <button @click="show">Show</button>
      <button @click="hide">Hide</button>
      <MobileDialog
        :show="show"
        title="title"
        content="foo foo foo foo foo foo foo foo foo foo foo foo foo foo foo"
        @ok="ok"/>
    </div>
  </div>
</template>

<script>
import MobileDialog from 'v-mobile-dialog'

export default {
  name: 'app',
  components: {
    MobileDialog
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    ok () {
      alert('ok')
      this.show = false
    },
    show () {
      this.show = true
    },
    hide () {
      this.show = false
    }
  }
}
</script>
