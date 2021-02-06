<template>
  <form
    method="POST"
    name="contact"
    class="grid grid-cols-1 gap-y-6"
    netlify
    @submit.prevent="submitForm()"
  >
    <input type="hidden" name="form-name" value="contact" />
    <!-- TODO: extract to a component -->
    <div>
      <label for="full_name" class="sr-only">お名前</label>
      <input
        id="full_name"
        v-model="form.full_name"
        type="text"
        name="full_name"
        autocomplete="name"
        class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
        placeholder="お名前"
      />
    </div>
    <div>
      <label for="email" class="sr-only">メールアドレス</label>
      <input
        id="email"
        v-model="form.email"
        name="email"
        type="email"
        autocomplete="email"
        class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
        placeholder="メールアドレス"
      />
    </div>
    <div>
      <label for="phone" class="sr-only">電話番号</label>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        name="phone"
        autocomplete="tel"
        class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
        placeholder="電話番号"
      />
    </div>
    <div>
      <label for="school_year" class="sr-only">学年（学生の方のみ）</label>
      <input
        id="school_year"
        v-model="form.school_year"
        type="text"
        name="school_year"
        class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
        placeholder="学年（学生の方のみ）"
      />
    </div>
    <div>
      <label for="message" class="sr-only">メッセージ</label>
      <textarea
        id="message"
        v-model="form.message"
        name="message"
        rows="4"
        class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
        placeholder="メッセージを入力してください"
      ></textarea>
    </div>
    <div>
      <button
        type="submit"
        class="inline-flex justify-center w-full py-3 px-6 border text-white border-black bg-black shadow-sm transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black md:w-auto"
      >
        送信
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        full_ame: '',
        email: '',
        phone: '',
        school_year: '',
        message: '',
      },
    }
  },
  methods: {
    async submitForm() {
      const data = {
        'form-name': 'contact',
        ...this.form,
      }

      try {
        await axios.post('/', this.encode(data), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        console.log('form has been submitted successfuly!')
      } catch (error) {
        console.log('error', error)
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
  },
}
</script>
