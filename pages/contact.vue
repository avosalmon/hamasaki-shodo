<template>
  <div>
    <PageSection class="flex justify-center py-8">
      <ContactForm class="w-full md:w-2/3" />
    </PageSection>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'

export default {
  components: {
    ContactForm,
  },
}
</script>
