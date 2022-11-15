// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    services: [
      {
        iconUrl: '/img/web.svg',
        title: 'Web development',
        content: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
      },
      {
        iconUrl: '/img/ux.svg',
        title: 'User experience & design',
        content: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
      },
      {
        iconUrl: '/img/mobile.svg',
        title: 'Mobile app development',
        content: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
      },
      {
        iconUrl: '/img/blockchain.svg',
        title: 'Blockchain solutions',
        content: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
      }
    ],
    brands: [
      {
        logoUrl: '/img/brands/visa-black.svg',
        title: 'visa',
        height: 40
      },
      {
        logoUrl: '/img/brands/tyme-bank-black.svg',
        title: 'tyme-bank',
        height: 45.25
      },
      {
        logoUrl: '/img/brands/distell-black.svg',
        title: 'distell',
        height: 50
      },
      {
        logoUrl: '/img/brands/spotify-black.svg',
        title: 'spotify',
        height: 50
      },
      {
        logoUrl: '/img/brands/microsoft-black.svg',
        title: 'microsoft',
        height: 40
      },
      {
        logoUrl: '/img/brands/engen-black.svg',
        title: 'engen',
        height: 60
      },
      {
        logoUrl: '/img/brands/nike-black.svg',
        title: 'nike',
        height: 40
      },
      {
        logoUrl: '/img/brands/wesgrow-black.svg',
        title: 'wesgro',
        height: 60
      },
      {
        logoUrl: '/img/brands/multichoice-black.svg',
        title: 'multichoice',
        height: 80
      },
      {
        logoUrl: '/img/brands/pnp-black.svg',
        title: 'picknpay',
        height: 34.58
      },
      {
        logoUrl: '/img/brands/liquid-black.svg',
        title: 'liquid',
        height: 36
      },
      {
        logoUrl: '/img/brands/tfg-black.svg',
        title: 'tfg',
        height: 100
      },
      {
        logoUrl: '/img/brands/sanlam-black.svg',
        title: 'sanlam',
        height: 42
      },
      {
        logoUrl: '/img/brands/santam-black.svg',
        title: 'santam',
        height: 50
      },
      {
        logoUrl: '/img/brands/bbc-black.svg',
        title: 'bbc',
        height: 40
      },
    ]
  }
  )
}
