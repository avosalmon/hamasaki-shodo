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
        <img
          src="https://static.wixstatic.com/media/f9201a_613c3f69aa2c4dde9a80de52e31cc225~mv2.jpg/v1/fill/w_1880,h_1000,al_c,q_85,usm_0.66_1.00_0.01/IMG_0917_JPG.webp"
          alt="はまさき書道教室"
        />
      </p>
    </PageSection>

    <PageSection id="message" class="flex flex-col md:flex-row mt-12 md:mt-24">
      <div class="mb-12 md:mb-0 md:p-10 md:bg-gray-100">
        <p class="leading-7 mb-4 md:mb-12">
          文字を上手に書きたい、美しく書きたい、という思いは、字を書きはじめたこどもから大人まで、多くの人が心の内に持っている願いではないでしょうか。<br />
          文字の美しさは、文字の形の良さだけを指すものではありません。その線をかたちづくる”一筆一筆”に美しさが宿っていきます。<br />
          「はまさき書道教室
          Singapore」では、3人までの少人数制のきめ細やかな指導によって、文字の外形的な美しさはもちろん、それに止まらない個性の光る文字を目指していきます。
        </p>
        <p>
          <a
            href="https://www.learning-stage.com/japanese-calligraphy/"
            target="_blank"
            rel="noopener"
            class="inline-block border border-black px-7 py-3 transition-colors duration-300 hover:bg-black hover:text-white"
            >Learning Stage HP</a
          >
        </p>
      </div>
      <div>
        <img
          src="https://static.wixstatic.com/media/f9201a_662faba766b04b9884971e28e9505970~mv2.jpg/v1/fill/w_1120,h_1240,al_c,q_85,usm_0.66_1.00_0.01/IMG_0929.webp"
          alt="筆"
        />
      </div>
    </PageSection>

    <PageSection
      id="teacher"
      class="mt-24 py-16 bg-gray-100"
      :is-full-width="true"
    >
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
        <li class="mb-24">
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
        <li>
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

    <PageSection id="course"></PageSection>

    <PageSection id="gallery"></PageSection>

    <PageSection id="contact"></PageSection>
  </div>
</template>

<script>
import PageSection from '@/components/PageSection'

export default {
  components: {
    PageSection,
  },
}
</script>
