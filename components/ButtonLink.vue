<template>
  <a v-if="isExternalLink" :class="classes" :href="href"><slot></slot></a>
  <NuxtLink v-else :class="classes" :to="href"><slot></slot></NuxtLink>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'white',
      validator: (value) => ['white', 'black'].includes(value),
    },
  },
  computed: {
    isExternalLink() {
      return this.href.startsWith('http')
    },
    classes() {
      return {
        'inline-block border border-black px-7 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black': true,
        'text-black hover:bg-black hover:text-white': this.theme === 'white',
        'text-white bg-black hover:bg-gray-700 hover:text-white':
          this.theme === 'black',
      }
    },
  },
}
</script>
