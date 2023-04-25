<template>
  <section
    class="full-loading"
    :class="{ absolute, [theme]: !!theme }"
    :style="[background ? `background-color: ${background}` : '']"
    v-show="loading"
  >
    <Spin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" />
  </section>
</template>
<script>
import { defineComponent } from 'vue'
import { Spin } from 'ant-design-vue'

export default defineComponent({
  components: { Spin },
  props: {
    tip: {
      type: String,
      default: ''
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
  }
})
</script>

