const contentful = require('contentful')

export default ({ app }, inject) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  inject('contentful', client)
}
