import Vue from 'vue'

Vue.directive('click-outside', {
  bind(el, binding, vNode) {
    if (typeof binding.value !== 'function') {
      const componentName = vNode.context.name
      let warn = `[vue-click-outside] provided expression '${binding.expression}' is not a function, but has to be`
      if (componentName) {
        warn += `Found in component '${componentName}'`
      }

      // eslint-disable-next-line no-console
      console.warn(warn)
    }

    const handler = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event)
      }
    }
    el.__vueClickOutside__ = handler

    document.addEventListener('click', handler)
  },

  unbind(el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  },
})
