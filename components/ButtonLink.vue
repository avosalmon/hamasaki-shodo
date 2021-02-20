<template>
  <a v-if="isExternalLink" :class="classList" :href="href"><slot></slot> </a>
  <NuxtLink v-else :class="classList" :to="href"><slot></slot> </NuxtLink>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.href.startsWith('http')
    },
    classList() {
      return 'inline-block border border-black px-7 py-3 transition-colors duration-300 hover:bg-black hover:text-white'
    },
  },
}
</script>
