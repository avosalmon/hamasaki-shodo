<template>
  <div>
    <header class="fixed z-10 w-full bg-white">
      <div
        class="flex items-center justify-between px-4 py-6 border-b-2 border-gray-100 sm:px-6 md:justify-center"
      >
        <h1 class="text-xl">
          <NuxtLink to="/">はまさき書道教室 Singapore</NuxtLink>
        </h1>
        <div class="-my-2 -mr-2 md:hidden">
          <MobileMenu></MobileMenu>
        </div>
      </div>
      <nav
        class="items-center justify-center hidden py-4 space-x-6 bg-gray-100 md:flex"
      >
        <NuxtLink
          to="/#message"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ごあいさつ
        </NuxtLink>
        <NuxtLink
          to="/#teacher"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          講師紹介
        </NuxtLink>
        <NuxtLink
          to="/#news"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          ニュース
        </NuxtLink>
        <NuxtLink
          to="/#course"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          コース
        </NuxtLink>
        <NuxtLink
          to="/courses/trial"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          体験講座
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-base font-medium text-gray-700 hover:text-gray-900"
        >
          お問い合わせ
        </NuxtLink>
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
    <footer class="w-full px-4 py-10 mx-auto text-center md:w-2/3 lg:w-3/5">
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
  head() {
    const path = this.$route.path === '/' ? '' : this.$route.path

    return {
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE_URL}${path}`,
        },
      ],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
