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
                  buildHookId: '5e2466fcde3884a699bea4fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-omw23f53',
                  apiId: '2d1b5995-325f-46bf-b8d9-39023dc23d02'
                },
                {
                  buildHookId: '5e2466fda59a249136814244',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zt2zjhc2',
                  apiId: 'b8244f3c-575b-4a36-90f2-bf07c1d01e8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamkunall/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zt2zjhc2.netlify.com', category: 'apps' }
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
