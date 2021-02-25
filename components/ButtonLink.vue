<template>
  <a
    class="inline-block border border-black px-7 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    :class="{
      'text-black hover:bg-black hover:text-white': theme === 'white',
      'text-white bg-black hover:bg-gray-700 hover:text-white':
        theme === 'black',
    }"
    :href="href"
    ><slot></slot
  ></a>
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
}
</script>
