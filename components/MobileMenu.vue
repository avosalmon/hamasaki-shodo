<template>
  <div v-click-outside="close">
    <button
      type="button"
      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      @click="open"
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

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right"
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
                  @click="close"
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
              <nav class="grid gap-y-4">
                <NuxtLink
                  to="/#message"
                  class="block text-center p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  @click.native="close"
                >
                  ごあいさつ
                </NuxtLink>

                <NuxtLink
                  to="/#teacher"
                  class="block text-center p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  @click.native="close"
                >
                  講師紹介
                </NuxtLink>

                <NuxtLink
                  to="/#news"
                  class="block text-center p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  @click.native="close"
                >
                  ニュース
                </NuxtLink>

                <NuxtLink
                  to="/#course"
                  class="block text-center p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  @click.native="close"
                >
                  コース
                </NuxtLink>

                <NuxtLink
                  to="/courses/trial"
                  class="block text-center p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  @click.native="close"
                >
                  体験講座
                </NuxtLink>

                <NuxtLink
                  to="/#contact"
                  class="block text-center p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  @click.native="close"
                >
                  お問い合わせ
                </NuxtLink>

                <a
                  href="https://www.instagram.com/sg_shodo_mh/"
                  target="_blank"
                  rel="noopener"
                  class="flex justify-center p-2 rounded-md hover:bg-gray-50"
                  aria-label="Instagram"
                  @click="close"
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Instagram
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
}
</script>
