export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Hero section headline',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      description: 'Hero section tagline',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1)
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Link',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url'
    },
    {
      name: 'behance',
      title: 'Behance URL',
      type: 'url'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'dribbble',
      title: 'Dribbble URL',
      type: 'url'
    }
  ]
}
