export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fd7c69cb57a260174787b31',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-s18qchq6',
                  apiId: 'b77c8742-b3d9-4bda-9e7c-5026c93fef57'
                },
                {
                  buildHookId: '5fd7c69cb57a2601347878ef',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ahrkwyp6',
                  apiId: '69655dd2-f5eb-45a5-a381-f31923cf3d33'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/larserikfinholt/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ahrkwyp6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
