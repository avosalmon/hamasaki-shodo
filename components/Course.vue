<template>
  <div class="flex flex-col md:flex-row">
    <div
      class="flex flex-col text-center md:justify-center md:w-1/3"
      :class="{ 'md:order-2': isReversed }"
    >
      <p class="text-2xl mb-1">{{ title }}</p>
      <slot></slot>
      <div class="hidden md:block md:mt-8">
        <ButtonLink :href="href">{{ linkLabel }}</ButtonLink>
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
      <div class="flex justify-center mt-4 md:hidden">
        <ButtonLink :href="href">{{ linkLabel }}</ButtonLink>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from '@/components/ButtonLink'

export default {
  components: {
    ButtonLink,
  },
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
