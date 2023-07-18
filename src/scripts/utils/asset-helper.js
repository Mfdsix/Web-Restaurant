import CONFIG from '../global/config'

const PROVIDERS = {
  DICODING: 'dicoding'
}

const getAsset = (path = null, provider = PROVIDERS.DICODING) => {
  let url = 'https://placehold.co/600x400'

  if (path) {
    switch (provider) {
      case PROVIDERS.DICODING:
        url = `${CONFIG.BASE_IMAGE_URL}/medium/${path}`
    }
  }

  return url
}

export default {
  getAsset
}
