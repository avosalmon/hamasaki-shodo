<template>
  <div class="flex flex-col px-4 md:flex-row md:container md:mx-auto md:px-0">
    <div class="flex-1 -mx-4 md:mx-0">
      <div class="md:hidden">
        <CldImage
          public-id="hamasaki-shodo.com/suzuri"
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
          public-id="hamasaki-shodo.com/suzuri"
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
      <h2 class="text-2xl mb-1 text-center">学生書道講座</h2>
      <p class="text-xl mb-1 text-center">（5才〜中学生）</p>
      <p class="text-xl mb-8 text-center">（60分）</p>
      <p class="leading-7 md:text-center">
        幼稚園生(5才)〜中学生までの講座です。<br class="hidden md:inline" />
        毛筆を中心に指導します。<br />
        硬筆は宿題と添削にて指導いたします。<br />
        年42回指導（月3〜4回目安）<br />
        月額＄120〜（学年により異なります。）<br />
        段・級取得には別途料金がかかります。<br class="hidden md:inline" />
        詳細はお問い合わせください。
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
