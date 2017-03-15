<template>
  <a
    @click="ok"
    href="javascript:;"
    class="weui-dialog__btn weui-dialog__btn_primary">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'v-mobile-dialog-button'
}
</script>
