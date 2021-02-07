<template>
  <div class="p-4" :class="{ 'bg-green-50': isSuccess, 'bg-red-50': isError }">
    <div class="flex">
      <div class="flex-shrink-0">
        <!-- Heroicon name: solid/check-circle -->
        <svg
          v-if="isSuccess"
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

        <!-- Heroicon name: solid/x-circle -->
        <svg
          v-if="isError"
          class="h-5 w-5 text-red-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-3">
        <p
          class="text-sm font-medium"
          :class="{ 'text-green-800': isSuccess, 'text-red-800': isError }"
        >
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['success', 'error'].includes(value),
    },
    message: {
      type: String,
      required: true,
    },
  },
  computed: {
    isSuccess() {
      return this.type === 'success'
    },
    isError() {
      return this.type === 'error'
    },
  },
}
</script>
