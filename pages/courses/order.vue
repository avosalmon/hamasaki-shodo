<template>
  <div class="flex flex-col px-4 md:flex-row md:container md:mx-auto md:px-0">
    <SocialHead title="筆文字依頼" page-path="/courses/order"></SocialHead>
    <div class="flex-1 -mx-4 md:mx-0">
      <div class="md:hidden">
        <CldImage
          public-id="hamasaki-shodo.com/work"
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
          public-id="hamasaki-shodo.com/work"
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
      <h2 class="text-2xl mb-1 text-center">筆文字依頼</h2>
      <p class="text-xl mb-8 text-center">（応相談）</p>
      <p class="leading-7 md:text-center">
        命名書やお誕生日・還暦祝いなどのプレゼント、<br
          class="hidden md:inline"
        />
        お店や名刺などの看板、ロゴなどを承っております。<br />
        案件ごとに価格が異なりますので、お問い合わせください。
      </p>
      <div class="flex justify-center mt-10">
        <ButtonLink href="/#contact">お問い合わせ</ButtonLink>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from '@/components/ButtonLink'
import SocialHead from '@/components/SocialHead'

export default {
  components: {
    ButtonLink,
    SocialHead,
  },
}
</script>
