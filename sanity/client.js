const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'wzrfca3l',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skVZOxsf46rVbO0OKJUKmxks3yi83W6MO96UieNLVFSuCDTukDw0eo060hjg2xqAVPajqbSzSUJTflsmzdJNCeFQe9SgI6kKcgdK4kaAhV05WfRGk9zsQb42fvPtpfuBpRO8AGozk08rD7lzkwDmQN9imAyTBonuymPXKzcAznM3xjUOYqwQ', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;