const pageSchema = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Bættu við texta sem birtist uppi í vinstra horni. Er líka notað fyrir SEO.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Page image',
      description:
        'Settu góða mynd sem er notuð í SEO, þegar línkum er deilt og þess háttar.',
    },
  ],
}

export { pageSchema }
