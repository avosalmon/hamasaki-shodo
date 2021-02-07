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
      <label for="message" class="sr-only">メッセージ</label>
      <textarea
        id="message"
        v-model="$v.form.message.$model"
        name="message"
        rows="4"
        class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-black focus:border-black border-gray-300"
        :class="{
          'border-red-600 text-red-600 placeholder-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500':
            $v.form.message.$error,
        }"
        placeholder="メッセージ"
      ></textarea>
      <p
        v-show="$v.form.message.$dirty && !$v.form.message.required"
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
      <div v-if="isSuccess" class="bg-green-50 p-4 mt-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- Heroicon name: solid/check-circle -->
            <svg
              class="h-5 w-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">
              送信が完了しました。
            </p>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button
                class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: solid/x -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        full_name: '',
        email: '',
        phone: '',
        school_year: '',
        message: '',
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
      message: {
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
