/**
 * Ideally move some of this logic into the backend instead.
 */
export const getTokenImg = (token: Solana.SolanaToken) => {
  if (
    token.JasesThumbnailImageUrl && 
    !token.JasesThumbnailImageUrl.endsWith('undefined') // @todo replace bandaid
  ) {
    return token.JasesThumbnailImageUrl
  } else if (token.centralizedStorageImageUrl && token.centralizedStorageImageUrl.startsWith('https')) {
    return token.centralizedStorageImageUrl
  } else {
    return "/Jases-square.png"
  }
}
