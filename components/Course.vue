<template>
  <div class="flex flex-col md:flex-row">
    <div
      class="flex flex-col text-center md:justify-center md:w-1/3"
      :class="{ 'md:order-2': isReversed }"
    >
      <p class="text-2xl mb-1">{{ title }}</p>
      <slot></slot>
      <div class="hidden md:block md:mt-8">
        <a
          :href="href"
          class="inline-block border border-black px-7 py-3 transition-colors duration-300 hover:bg-black hover:text-white"
          >{{ linkLabel }}</a
        >
      </div>
    </div>
    <div class="md:w-2/3" :class="{ 'md:order-1': isReversed }">
      <CldImage
        :public-id="imagePath"
        aspectRatio="4:3"
        crop="fill"
        effect="sharpen:100"
        quality="auto"
        fetchFormat="auto"
        :alt="imageAlt"
        responsive
      />
      <a
        :href="href"
        class="w-full text-center inline-block md:hidden border border-black px-7 py-3 transition-colors duration-300 hover:bg-black hover:text-white"
        >{{ linkLabel }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    linkLabel: {
      type: String,
      default: '詳細',
    },
    href: {
      type: String,
      required: true,
    },
    isReversed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
