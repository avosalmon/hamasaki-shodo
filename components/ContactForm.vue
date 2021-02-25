<template>
  <div>
    <h2 class="mb-10 text-4xl text-center">お問い合わせ</h2>
    <p class="leading-7 mb-10">
      （現在生徒さん募集を停止しています）<br />
      何でもお気軽にお問い合わせください。<br />
      体験講座をご希望の方はご希望のコースを明記ください。<br />
      ※3日以内に返信しております。返信がない場合は、迷惑メールに振り分けられていないかご確認ください。<br />
      ※WhatsAppでの返信をご希望の方は、メッセージ欄にその旨ご記載をお願いします。
    </p>
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
          v-model="$v.form.full_name.$model"
          type="text"
          name="full_name"
          autocomplete="name"
          class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
          :class="{
            'border-red-600 text-red-600 placeholder-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500':
              $v.form.full_name.$error,
          }"
          placeholder="お名前"
        />
        <p
          v-show="$v.form.full_name.$dirty && !$v.form.full_name.required"
          class="mt-2 text-sm text-red-600"
        >
          お名前を入力してください。
        </p>
      </div>
      <div>
        <label for="email" class="sr-only">メールアドレス</label>
        <input
          id="email"
          v-model="$v.form.email.$model"
          name="email"
          type="email"
          autocomplete="email"
          class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
          :class="{
            'border-red-600 text-red-600 placeholder-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500':
              $v.form.email.$error,
          }"
          placeholder="メールアドレス"
        />
        <p
          v-show="$v.form.email.$dirty && !$v.form.email.required"
          class="mt-2 text-sm text-red-600"
        >
          メールアドレスを入力してください。
        </p>
        <p
          v-show="$v.form.email.$dirty && !$v.form.email.email"
          class="mt-2 text-sm text-red-600"
        >
          メールアドレスの形式が正しくありません。
        </p>
      </div>
      <div>
        <label for="phone" class="sr-only">電話番号</label>
        <input
          id="phone"
          v-model="$v.form.phone.$model"
          type="tel"
          name="phone"
          autocomplete="tel"
          class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
          :class="{
            'border-red-600 text-red-600 placeholder-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500':
              $v.form.phone.$error,
          }"
          placeholder="電話番号"
        />
        <p
          v-show="$v.form.phone.$dirty && !$v.form.phone.required"
          class="mt-2 text-sm text-red-600"
        >
          電話番号を入力してください。
        </p>
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
        <label for="body" class="sr-only">メッセージ</label>
        <textarea
          id="body"
          v-model="$v.form.body.$model"
          name="body"
          rows="4"
          class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
          :class="{
            'border-red-600 text-red-600 placeholder-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500':
              $v.form.body.$error,
          }"
          placeholder="メッセージ"
        ></textarea>
        <p
          v-show="$v.form.body.$dirty && !$v.form.body.required"
          class="mt-2 text-sm text-red-600"
        >
          メッセージを入力してください。
        </p>
      </div>
      <div>
        <button
          type="submit"
          class="inline-flex justify-center w-full py-3 px-6 border text-white border-black bg-black shadow-sm transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black md:w-auto"
        >
          送信
        </button>
        <Notification
          v-show="isSuccess"
          class="mt-4"
          type="success"
          message="送信が完了しました。"
        ></Notification>
        <Notification
          v-show="isError"
          class="mt-4"
          type="error"
          message="送信に失敗しました。"
        ></Notification>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import Notification from '@/components/Notification'

export default {
  component: {
    Notification,
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        full_name: '',
        email: '',
        phone: '',
        school_year: '',
        body: '',
      },
      isSuccess: false,
      isError: false,
    }
  },
  validations: {
    form: {
      full_name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
      body: {
        required,
      },
    },
  },
  methods: {
    async submitForm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const data = {
        'form-name': 'contact',
        ...this.form,
      }

      try {
        await axios.post('/', this.encode(data), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        this.resetForm()
        this.isSuccess = true
        this.isError = false
      } catch (error) {
        this.isSuccess = false
        this.isError = true
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },
    resetForm() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = ''
      })
      this.$v.$reset()
    },
  },
}
</script>
