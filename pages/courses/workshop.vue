<template>
  <div class="flex flex-col px-4 md:flex-row md:container md:mx-auto md:px-0">
    <div class="flex-1 -mx-4 md:mx-0">
      <div class="md:hidden">
        <CldImage
          public-id="hamasaki-shodo.com/postcard"
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
          public-id="hamasaki-shodo.com/postcard"
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
      <h2 class="text-2xl mb-1 text-center">単発ワークショップ</h2>
      <p class="text-xl mb-1 text-center">（60分〜120分）</p>
      <p class="text-xl mb-8 text-center">※不定期</p>
      <p class="leading-7 md:text-center">
        不定期・単発開催のワークショップです。<br />
        開催情報は<a href="/news" class="underline">「お知らせ」</a
        >欄にて公開いたします。<br />
        団体様で開催ご希望の方はお問い合わせください。
      </p>
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
