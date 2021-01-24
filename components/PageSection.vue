<template>
  <section
    class="w-full mx-auto px-4"
    :class="{ 'md:w-2/3 lg:w-3/5': !isFullWidth }"
  >
    <div v-if="isFullWidth" class="mx-auto md:w-2/3 lg:w-3/5">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </section>
</template>

<script>
export default {
  props: {
    isFullWidth: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
