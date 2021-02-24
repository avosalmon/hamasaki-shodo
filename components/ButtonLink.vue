<template>
  <a
    class="inline-block border border-black px-7 py-3 transition-colors duration-300 hover:bg-black hover:text-white"
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
  },
}
</script>
