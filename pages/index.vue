<template>
  <div>
    <SocialHead :image-url="mainImageUrl"></SocialHead>
    <PageSection class="text-center">
      <p class="my-3 text-4xl md:text-6xl">はまさき書道教室</p>
      <p class="mb-6 text-4xl md:text-6xl">Singapore</p>
      <p class="mb-12 text-xl md:mb-16">
        <span>3人までの少人数指導。</span>
        <br class="md:hidden" />
        <span>River Valleyの小さな教室です。</span>
      </p>
      <div class="aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9">
        <img :src="mainImageUrl" class="object-cover" alt="はまさき書道教室" />
      </div>
    </PageSection>

    <div id="message" class="mb-12 md:mb-24"></div>
    <PageSection class="flex flex-col md:flex-row">
      <div class="flex-1 mb-12 md:mb-0 md:p-10 md:bg-gray-100">
        <p class="mb-4 leading-8 md:mb-12">
          文字を上手に書きたい、美しく書きたい、という思いは、字を書きはじめたこどもから大人まで、多くの人が心の内に持っている願いではないでしょうか。<br />
          文字の美しさは、文字の形の良さだけを指すものではありません。その線をかたちづくる”一筆一筆”に美しさが宿っていきます。<br />
          「はまさき書道教室
          Singapore」では、3人までの少人数制のきめ細やかな指導によって、文字の外形的な美しさはもちろん、それに止まらない個性の光る文字を目指していきます。
        </p>
      </div>
      <div class="flex-1">
        <div
          class="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-4 md:h-full"
        >
          <img
            :src="messageImageUrl"
            class="object-cover md:h-full"
            alt="筆"
            loading="lazy"
          />
        </div>
      </div>
    </PageSection>

    <dir id="teacher" class="mb-24"></dir>
    <section class="w-full px-4 py-4 mx-auto bg-gray-100 md:py-16">
      <div class="flex flex-col mx-auto md:flex-row md:w-2/3 lg:w-3/5">
        <div class="flex-1">
          <div class="md:hidden">
            <CldImage
              public-id="hamasaki-shodo.com/teacher"
              aspectRatio="4:3"
              crop="fill"
              effect="sharpen:100"
              quality="auto"
              fetchFormat="auto"
              alt="濱崎麻里子"
              loading="lazy"
            />
          </div>
          <div class="hidden md:block">
            <CldImage
              public-id="hamasaki-shodo.com/teacher"
              aspectRatio="1:1"
              crop="fill"
              effect="sharpen:100"
              quality="auto"
              fetchFormat="auto"
              alt="濱崎麻里子"
              loading="lazy"
            />
          </div>
        </div>
        <div class="flex-1 py-4 md:px-10 md:py-0">
          <h2 class="mb-8 text-2xl">濱崎 麻里子</h2>
          <ul class="mb-8">
            <li class="mb-1">東京学芸大学教育学部書道専攻卒業</li>
            <li class="mb-1">中学校教諭一種免許状 (国語) 取得</li>
            <li>高等学校教諭一種免許状 (書道) 取得</li>
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
            <li class="mb-1">
              <time datetime="2011" class="mr-2">2011</time>書の交差展
              (やさしい予感/目黒)
            </li>
            <li class="mb-1">
              <time datetime="2013" class="mr-2">2013</time>横浜赤レンガ2013
              -sho is it!- (横浜赤レンガ倉庫一号館/横浜)
            </li>
            <li class="mb-1">
              <time datetime="2015" class="mr-2">2015</time>藤華展
              (鳩居堂/銀座)・髙墨展 (日展新会館/日暮里)
            </li>
            <li class="mb-1">
              <time datetime="2017" class="mr-2">2017</time>藤華展 (鳩居堂/銀座)
            </li>
            <li class="mb-1">
              <time datetime="2019" class="mr-2">2019</time>藤華展
              (鳩居堂/銀座)・古筆を学ぶ五人展 (日展新会館/日暮里)
            </li>
            <li>他 多数グループ展に出品</li>
          </ul>
        </div>
      </div>
    </section>

    <div id="news" class="mb-24"></div>
    <PageSection class="py-8">
      <h2 class="mb-20 text-4xl text-center">ニュース</h2>
      <News
        v-for="(item, index) in news"
        :key="item.id"
        :title="item.title"
        :publish-date="item.publish_date"
        :body="item.body"
        :class="{ 'mb-24': index !== news.length - 1 }"
      ></News>
    </PageSection>

    <div id="course" class="mb-24"></div>
    <PageSection class="py-8">
      <h2 class="mb-10 text-4xl text-center">コース</h2>
      <p class="leading-8 md:text-center">
        いずれのコースもRiver Valleyでの少人数（3人まで）指導です。<br />
        体験講座もございます。入会金、用具代などについてはお問い合わせください。
      </p>

      <Course
        class="mt-20"
        title="学生書道講座"
        image-path="hamasaki-shodo.com/suzuri"
        image-alt="硯"
        href="/courses/kids"
      >
        <p class="mb-1 text-xl">（5才〜中学生）</p>
        <p class="mb-2 text-xl">（60分）</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="大人向け講座"
        image-path="hamasaki-shodo.com/suzuri-02"
        image-alt="硯"
        href="/courses/adults"
        is-reversed
      >
        <p class="mb-2 text-xl">（90分）</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="単発ワークショップ"
        image-path="hamasaki-shodo.com/postcard"
        image-alt="ワークショップ"
        href="/courses/workshop"
      >
        <p class="mb-1 text-xl">（60分〜120分）</p>
        <p class="mb-2 text-xl">※不定期</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="筆文字依頼"
        image-path="hamasaki-shodo.com/work"
        image-alt="筆文字依頼"
        href="/courses/order"
        is-reversed
      >
        <p class="mb-2 text-xl">（応相談）</p>
      </Course>

      <Course
        class="mt-20 md:mt-40"
        title="体験講座"
        image-path="hamasaki-shodo.com/shodo-02"
        image-alt="体験講座"
        href="/courses/trial"
      >
        <p class="mb-2 text-xl">（約60分）</p>
      </Course>
    </PageSection>

    <div id="gallery"></div>
    <PageSection></PageSection>

    <div id="contact" class="mb-24"></div>
    <PageSection class="flex justify-center py-8">
      <ContactForm class="w-full md:w-2/3" />
    </PageSection>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import ContactForm from '@/components/ContactForm'
import Course from '@/components/Course'
import News from '@/components/News'
import PageSection from '@/components/PageSection'
import SocialHead from '@/components/SocialHead'

export default {
  components: {
    ContactForm,
    Course,
    News,
    PageSection,
    SocialHead,
  },
  async asyncData({ $contentful }) {
    const renderOptions = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) =>
          `<p class="mb-4">${next(node.content).replace(/\n/g, `</br>`)}</p>`,
        [INLINES.HYPERLINK]: (node, next) =>
          `<a class="underline" target="_blank" rel="noopener" href="${
            node.data.uri
          }">${next(node.content)}</a>`,
      },
    }

    const { items } = await $contentful.getEntries({
      content_type: 'news',
      order: '-fields.publish_date',
    })

    const news = items.map((item) => {
      return {
        id: item.sys.id,
        title: item.fields.title,
        publish_date: item.fields.publish_date,
        body: documentToHtmlString(item.fields.body, renderOptions),
      }
    })

    return { news }
  },
  computed: {
    mainImageUrl() {
      return this.$cloudinary.image.url('hamasaki-shodo.com/shodo', {
        width: 1800,
        crop: 'fill',
        effect: 'sharpen:100',
        quality: 'auto',
        fetchFormat: 'auto',
      })
    },
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
