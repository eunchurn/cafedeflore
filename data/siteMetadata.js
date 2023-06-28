const siteMetadata = {
  title: 'Cafe de Flore',
  author: 'Eunchurn Park',
  headerTitle: 'Cafe de flore',
  description: 'Cafe de flore website',
  snippets: 'What is this?',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://cafedeflore.kr',
  siteRepo: 'https://github.com/eunchurn/cafedeflorekr',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/og.jpg',
  email: 'cafedeflorekr@gmail.com',
  github: 'https://github.com/eunchurn',
  twitter: 'https://twitter.com/eunchurn',
  linkedin: '',
  website: 'https://cafedeflore.kr',
  locale: 'ko-KR',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'eunchurn',
  },
}

module.exports = siteMetadata
