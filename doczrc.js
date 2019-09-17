// export default {
//   files: '**/*.{mdx}',
//   theme: 'theme/index'
// }

export default {
  title: 'Helium Developers',
  theme: 'theme/index',
  menu: [
    {
      name: 'Home',
    },
    {
      name: 'Device',
      menu: [
        'LongFi Protocol',
        'LongFi SDK',
        'HeliOS',
      ],
    },
    {
      name: 'Blockchain',
      menu: [
        'API',
      ],
    },
  ],
  ignore: ['README.md'],
}

