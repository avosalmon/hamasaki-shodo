import Vue from 'vue'
import { format } from 'date-fns'

Vue.filter('date', function (value) {
  if (!value) return ''
  return format(new Date(value), 'Y年M月d日')
})
