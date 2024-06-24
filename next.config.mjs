/* eslint-disable import/no-anonymous-default-export */
// next.config.mjs
// updated
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

export default {
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
}
