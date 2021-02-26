<template>
  <span v-if="false" />
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default:
        'はまさき書道教室シンガポールでは、マンツーマンから少人数で、幼稚園生から大人まできめ細やかに指導いたします。',
    },
    pagePath: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default:
        'https://res.cloudinary.com/avosalmon/image/upload/v1611417243/hamasaki-shodo.com/shodo.jpg',
    },
  },

  head() {
    const siteName = process.env.APP_NAME
    const title = this.title ? `${this.title} - ${siteName}` : siteName
    const pageUrl = `${process.env.BASE_URL}${this.pagePath}`

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.imageUrl,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: title,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: siteName,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: pageUrl,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.imageUrl,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title,
        },
      ],
    }
  },
}
</script>
