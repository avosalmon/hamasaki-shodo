<template>
  <div>
    <header class="relative bg-white">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 px-4 py-6 sm:px-6 md:justify-center"
      >
        <h1 class="text-xl">
          <a href="/">はまさき書道教室 Singapore</a>
        </h1>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="isMenuOn = true"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="hidden md:flex justify-center items-center bg-gray-100 py-4 space-x-6"
      >
        <a
          href="#message"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ごあいさつ
        </a>
        <a
          href="#teacher"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          講師紹介
        </a>
        <a
          href="#news"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ニュース
        </a>
        <a
          href="#course"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          コース
        </a>
        <a
          href="#gallery"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ギャラリー
        </a>
        <a
          href="#contact"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          お問い合わせ
        </a>
        <a
          href="https://www.instagram.com/sg_shodo_mh/"
          target="_blank"
          rel="noopener"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </nav>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="isMenuOn"
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-end">
                <div class="-mr-2">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    @click="isMenuOn = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a
                    href="#message"
                    class="-m-3 p-3 flex justify-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      ごあいさつ
                    </span>
                  </a>

                  <a
                    href="#teacher"
                    class="-m-3 p-3 flex justify-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      講師紹介
                    </span>
                  </a>

                  <a
                    href="#news"
                    class="-m-3 p-3 flex justify-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      ニュース
                    </span>
                  </a>

                  <a
                    href="#course"
                    class="-m-3 p-3 flex justify-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      コース
                    </span>
                  </a>

                  <a
                    href="#gallery"
                    class="-m-3 p-3 flex justify-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      ギャラリー
                    </span>
                  </a>

                  <a
                    href="#contact"
                    class="-m-3 p-3 flex justify-center rounded-md hover:bg-gray-50"
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      お問い合わせ
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>
    <main class="py-10">
      <Nuxt />
    </main>
    <footer class="mx-auto w-full md:w-2/3 lg:w-3/5 px-4 py-10 text-center">
      <span>&copy; {{ currentYear }} はまさき書道教室 Singapore. </span>
      <br class="md:hidden" />
      <span>Supported by Learning Stage</span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOn: false,
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
