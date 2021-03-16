export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6050a569332d77b2fd92f462',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r3xu16fz',
                  apiId: '0f0d4b7b-7d48-4d8f-ab2a-968b991ae3a8'
                },
                {
                  buildHookId: '6050a569f51df5ba41866153',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1beopb75',
                  apiId: '3b569d87-3b08-4ba3-876e-17e7f9656958'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xLEWKANx/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1beopb75.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
