export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Church Designs', value: 'Church Designs' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Business Flyers', value: 'Business Flyers' },
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'problem',
      title: 'Problem',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'results',
      title: 'Results',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      category: 'category'
    },
    prepare(selection: any) {
      const { title, media, category } = selection;
      return {
        title: title,
        subtitle: category,
        media: media
      };
    }
  }
}
