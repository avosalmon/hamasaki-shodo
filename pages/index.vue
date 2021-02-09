<template>
  <div>
    <PageSection class="text-center">
      <p class="my-3 text-4xl md:text-6xl">はまさき書道教室</p>
      <p class="mb-4 text-4xl md:text-6xl">Singapore</p>
      <p class="mb-8 text-2xl">Supported by Learning Stage</p>
      <p class="mb-12 text-xl">
        <span>3人までの少人数指導。</span>
        <br class="md:hidden" />
        <span>River Valleyの小さな教室です。</span>
      </p>
      <p>
        <CldImage
          public-id="hamasaki-shodo.com/shodo"
          aspectRatio="16:9"
          quality="auto"
          crop="fill"
          fetchFormat="auto"
          alt="はまさき書道教室"
          responsive
        />
      </p>
    </PageSection>

    <PageSection id="message" class="flex flex-col md:flex-row mt-12 md:mt-24">
      <div class="flex-1 mb-12 md:mb-0 md:p-10 md:bg-gray-100">
        <p class="leading-7 mb-4 md:mb-12">
          文字を上手に書きたい、美しく書きたい、という思いは、字を書きはじめたこどもから大人まで、多くの人が心の内に持っている願いではないでしょうか。<br />
          文字の美しさは、文字の形の良さだけを指すものではありません。その線をかたちづくる”一筆一筆”に美しさが宿っていきます。<br />
          「はまさき書道教室
          Singapore」では、3人までの少人数制のきめ細やかな指導によって、文字の外形的な美しさはもちろん、それに止まらない個性の光る文字を目指していきます。
        </p>
        <p>
          <ButtonLink
            href="https://www.learning-stage.com/japanese-calligraphy/"
            target="_blank"
            rel="noopener"
            >Learning Stage HP</ButtonLink
          >
        </p>
      </div>
      <div class="flex-1">
        <div class="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-4">
          <img :src="messageImageUrl" class="md:h-full object-cover" alt="筆" />
        </div>
      </div>
    </PageSection>

    <PageSection id="teacher" class="mt-24 py-16 bg-gray-100" is-full-width>
      <h3 class="mb-8 text-2xl">濱崎 麻里子</h3>
      <ul class="mb-8">
        <li class="mb-1">東京学芸大学教育学部書道専攻卒業</li>
        <li class="mb-1">中学校教諭一種免許状（国語）取得</li>
        <li>高等学校教諭一種免許状（書道）取得</li>
      </ul>
      <dl class="mb-8">
        <dt class="mb-1">2011-2013</dt>
        <dd class="mb-1">埼玉県私立中学校にて国語・書写を指導</dd>
        <dt class="mb-1">2013-2020</dt>
        <dd class="mb-1">東京都立高等学校にて書道を指導</dd>
        <dt class="mb-1">2020.7</dt>
        <dd>来星</dd>
      </dl>
      <ul>
        <li class="mb-1">2011 書の交差展（やさしい予感/目黒）</li>
        <li class="mb-1">
          2013 横浜赤レンガ２０１３-sho is it!-（横浜赤レンガ倉庫一号館/横浜）
        </li>
        <li class="mb-1">
          2015 藤華展（鳩居堂/銀座）・髙墨展（日展新会館/日暮里）
        </li>
        <li class="mb-1">2017 藤華展（鳩居堂/銀座）</li>
        <li class="mb-1">
          2019 藤華展（鳩居堂/銀座）・古筆を学ぶ五人展（日展新会館/日暮里）
        </li>
        <li>他 多数グループ展に出品</li>
      </ul>
    </PageSection>

    <PageSection id="news" class="mt-24 py-8">
      <h3 class="mb-20 text-4xl text-center">ニュース</h3>
      <ul>
        <!-- TODO: Extract as "News" component -->
        <li class="leading-7 mb-24">
          <p class="mb-8 text-2xl">大人クラス生徒さん募集</p>
          <time class="inline-block mb-8 text-lg" datetime="2021-01-24">
            2021年1月24日
          </time>
          <p>
            募集を一時停止していた大人のクラスですが、下記の曜日で募集を再開いたします。（）内は定員です。<br />
            火曜 午後2時〜（1名）<br />
            午後4時〜（1名）<br />
            水曜 午後2時〜（2名）<br />
            金曜 午前10時〜（2名）<br />
            午後2時〜（2名）<br /><br />
            入会・体験講座ご希望の方はお問い合わせフォームよりご連絡ください。
          </p>
        </li>
        <li class="leading-7">
          <p class="mb-8 text-2xl">学生クラス生徒さん募集</p>
          <time class="inline-block mb-8 text-lg" datetime="2021-01-24">
            2021年1月24日
          </time>
          <p>
            金曜日17：00〜のクラスの生徒さんを募集いたします。2名まで受け入れ可能です。<br />
            入会・体験講座をご希望の方はお問い合わせフォームよりご連絡ください。
          </p>
        </li>
      </ul>
    </PageSection>

    <PageSection id="course" class="mt-24 py-8">
      <h3 class="mb-10 text-4xl text-center">コース</h3>
      <p class="leading-7 md:text-center">
        いずれのコースもRiver Valleyでの少人数（3人まで）指導です。<br />
        体験講座もございます。入会金、用具代などについてはお問い合わせください。
      </p>

      <Course
        class="mt-20"
        title="学生書道講座"
        image-path="hamasaki-shodo.com/suzuri"
        image-alt="硯"
        href="#"
      >
        <p class="text-xl mb-1">（５才〜中学生）</p>
        <p class="text-xl mb-2">（60分）</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="大人向け講座"
        image-path="hamasaki-shodo.com/suzuri-02"
        image-alt="硯"
        href="#"
        is-reversed
      >
        <p class="text-xl mb-2">（90分）</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="単発ワークショップ"
        image-path="hamasaki-shodo.com/suzuri"
        image-alt="硯"
        href="#"
      >
        <p class="text-xl mb-1">（60分〜120分）</p>
        <p class="text-xl mb-2">※不定期</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="筆文字依頼"
        image-path="hamasaki-shodo.com/suzuri-02"
        image-alt="硯"
        href="#"
        is-reversed
      >
        <p class="text-xl mb-2">（応相談）</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="体験講座"
        image-path="hamasaki-shodo.com/suzuri"
        image-alt="硯"
        href="#contact"
        link-label="お問い合わせ"
      >
        <p class="text-xl mb-2">（約60分）</p>
      </Course>
    </PageSection>

    <PageSection id="gallery"></PageSection>

    <PageSection id="contact" class="mt-24 py-8">
      <h3 class="mb-10 text-4xl text-center">お問い合わせ</h3>
      <p class="leading-7 mb-10 md:text-center">
        （現在生徒さん募集を停止しています）<br />
        何でもお気軽にお問い合わせください。<br />
        体験講座をご希望の方はご希望のコースを明記ください。<br />
        ※3日以内に返信しております。返信がない場合は迷惑メールに振り分けられていないかご確認ください。<br />
        ※WhatsAppでの返信をご希望の方はメッセージ欄に記載をお願いします。
      </p>
      <div class="flex justify-center">
        <ContactForm class="w-full md:w-2/3" />
      </div>
    </PageSection>
  </div>
</template>

<script>
import ButtonLink from '@/components/ButtonLink'
import ContactForm from '@/components/ContactForm'
import Course from '@/components/Course'
import PageSection from '@/components/PageSection'

export default {
  components: {
    ButtonLink,
    ContactForm,
    Course,
    PageSection,
  },
  computed: {
    messageImageUrl() {
      return this.$cloudinary.image.url('hamasaki-shodo.com/brushes', {
        width: 1800,
        crop: 'fill',
        effect: 'sharpen:100',
        quality: 'auto',
        fetchFormat: 'auto',
      })
    },
  },
}
</script>
