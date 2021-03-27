<template>
  <div class="leading-8">
    <p class="mb-8 text-2xl">
      {{ title }}
    </p>
    <time class="block mb-8 text-lg" :datetime="publishDate">
      {{ publishDate | date }}
    </time>
    <div v-html="body"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
}
</script>
