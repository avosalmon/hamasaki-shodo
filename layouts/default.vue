<template>
  <div>
    <header class="fixed bg-white w-full z-10">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 px-4 py-6 sm:px-6 md:justify-center"
      >
        <h1 class="text-xl">
          <a href="/">はまさき書道教室 Singapore</a>
        </h1>
        <div class="-mr-2 -my-2 md:hidden">
          <MobileMenu></MobileMenu>
        </div>
      </div>
      <nav
        class="hidden md:flex justify-center items-center bg-gray-100 py-4 space-x-6"
      >
        <a
          href="/#message"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ごあいさつ
        </a>
        <a
          href="/#teacher"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          講師紹介
        </a>
        <a
          href="/#news"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ニュース
        </a>
        <a
          href="/#course"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          コース
        </a>
        <a
          href="/#gallery"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ギャラリー
        </a>
        <a
          href="/#contact"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          お問い合わせ
        </a>
        <a
          href="https://www.instagram.com/sg_shodo_mh/"
          target="_blank"
          rel="noopener"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
          aria-label="Instagram"
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
    </header>
    <main class="pt-32 pb-10 md:pt-52">
      <Nuxt />
    </main>
    <footer class="mx-auto w-full md:w-2/3 lg:w-3/5 px-4 py-10 text-center">
      <p class="flex justify-center mb-8">
        <a
          href="https://www.instagram.com/sg_shodo_mh/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
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
      </p>
      <p>
        <span>&copy; {{ currentYear }} はまさき書道教室 Singapore. </span>
        <br class="md:hidden" />
        <span>Supported by Learning Stage</span>
      </p>
    </footer>
  </div>
</template>

<script>
import MobileMenu from '@/components/MobileMenu'

export default {
  components: {
    MobileMenu,
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
