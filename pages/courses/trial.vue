<template>
  <div class="px-4 md:container md:mx-auto md:px-0">
    <SocialHead title="体験講座" page-path="/courses/trial"></SocialHead>
    <div class="flex flex-col md:flex-row">
      <div class="flex-1 -mx-4 md:mx-0">
        <div class="md:hidden">
          <CldImage
            public-id="hamasaki-shodo.com/shodo-02"
            aspectRatio="4:3"
            crop="fill"
            effect="sharpen:100"
            quality="auto"
            fetchFormat="auto"
            alt="硯"
            responsive
          />
        </div>
        <div class="hidden md:block">
          <CldImage
            public-id="hamasaki-shodo.com/shodo-02"
            aspectRatio="1:1"
            crop="fill"
            effect="sharpen:100"
            quality="auto"
            fetchFormat="auto"
            alt="硯"
            responsive
          />
        </div>
      </div>
      <div class="flex-1 pt-10 md:pt-32">
        <h2 class="text-2xl mb-1 text-center">体験講座</h2>
        <p class="text-xl mb-8 text-center">（約60分）</p>
        <p class="leading-7 md:text-center">
          体験料＄40<br />
          詳細はお問い合わせください。
        </p>
        <div class="flex justify-center mt-10">
          <ButtonLink href="#contact">お問い合わせ</ButtonLink>
        </div>
      </div>
    </div>
    <div id="contact" class="mb-24"></div>
    <PageSection class="flex justify-center py-8">
      <ContactForm class="w-full md:w-2/3" />
    </PageSection>
  </div>
</template>

<script>
import ButtonLink from '@/components/ButtonLink'
import ContactForm from '@/components/ContactForm'
import PageSection from '@/components/PageSection'
import SocialHead from '@/components/SocialHead'

export default {
  components: {
    ButtonLink,
    ContactForm,
    PageSection,
    SocialHead,
  },
}
</script>
