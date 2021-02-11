<template>
  <div class="flex flex-col px-4 md:flex-row md:container md:mx-auto md:px-0">
    <div class="flex-1 -mx-4 md:mx-0">
      <div class="md:hidden">
        <CldImage
          public-id="hamasaki-shodo.com/suzuri-02"
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
          public-id="hamasaki-shodo.com/suzuri-02"
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
      <h2 class="text-2xl mb-1 text-center">大人講座</h2>
      <p class="text-xl mb-8 text-center">（90分）</p>
      <p class="leading-7 mb-4 md:text-center">
        大人のための毛筆またはペン字講座です。
      </p>
      <p class="leading-7 mb-4 md:text-center">
        【大人A】<br />
        年42回（月3~4回目安）<br />
        月額＄200
      </p>
      <p class="leading-7 mb-4 md:text-center">
        【大人B】<br />
        年24回（月2回目安）<br />
        月額＄150
      </p>
      <p class="leading-7 md:text-center">詳細はお問い合わせください。</p>
      <div class="flex justify-center mt-10">
        <ButtonLink href="/#contact">お問い合わせ</ButtonLink>
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
}
</script>
