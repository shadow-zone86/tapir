export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const route = useRoute()

  const siteUrl = config.siteUrl as string
  const canonicalUrl = siteUrl ? `${siteUrl.replace(/\/$/, '')}${route.path}` : undefined

  const ogImage = siteUrl ? `${siteUrl}/og-image.png` : undefined

  useSeoMeta({
    ogTitle: 'Tapir — каталог товаров',
    ogDescription: 'Tapir — каталог товаров',
    ogImage,
    ogUrl: canonicalUrl,
    ogType: 'website',
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Tapir — каталог товаров',
    twitterDescription: 'Tapir — каталог товаров'
  })

  useHead({
    link: canonicalUrl ? [{ rel: 'canonical', href: canonicalUrl }] : []
  })
})
