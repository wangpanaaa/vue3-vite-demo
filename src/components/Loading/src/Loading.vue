<template>
  <section
    class="full-loading"
    :class="{ absolute, [theme]: !!theme }"
    :style="[background ? `background-color: ${background}` : '']"
    v-show="loading"
  >
    <a-spin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" />
  </section>
</template>
<script setup>
defineProps({
  tip: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'LARGE',
    validator: (v) => {
      return ['DEFAULT', 'SMALL', 'LARGE'].includes(v)
    }
  },
  absolute: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  background: {
    type: String
  },
  theme: {
    type: String
  }
})
</script>

<style lang="less" scoped>
.full-loading {
  display: flex;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(240 242 245 / 40%);

  &.absolute {
    position: absolute;
    z-index: 300;
    top: 0;
    left: 0;
  }
}

html[data-theme='dark'] {
  .full-loading:not(.light) {
    background-color: @modal-mask-bg;
  }
}

.full-loading.dark {
  background-color: @modal-mask-bg;
}
</style>
