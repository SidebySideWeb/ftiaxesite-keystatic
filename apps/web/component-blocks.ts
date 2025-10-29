export const componentBlocks = {
  paragraph: {
    label: 'Paragraph',
    schema: {
      content: {
        type: 'text',
        multiline: true,
      },
    },
  },
  heading: {
    label: 'Heading',
    schema: {
      level: {
        type: 'select',
        options: [
          { label: 'H1', value: '1' },
          { label: 'H2', value: '2' },
          { label: 'H3', value: '3' },
          { label: 'H4', value: '4' },
          { label: 'H5', value: '5' },
          { label: 'H6', value: '6' },
        ],
        defaultValue: '2',
      },
      content: {
        type: 'text',
      },
    },
  },
  image: {
    label: 'Image',
    schema: {
      src: {
        type: 'image',
      },
      alt: {
        type: 'text',
      },
      caption: {
        type: 'text',
      },
    },
  },
  quote: {
    label: 'Quote',
    schema: {
      content: {
        type: 'text',
        multiline: true,
      },
      author: {
        type: 'text',
      },
    },
  },
  callToAction: {
    label: 'Call to Action',
    schema: {
      title: {
        type: 'text',
      },
      description: {
        type: 'text',
        multiline: true,
      },
      buttonText: {
        type: 'text',
      },
      buttonUrl: {
        type: 'text',
      },
    },
  },
  codeBlock: {
    label: 'Code Block',
    schema: {
      code: {
        type: 'text',
        multiline: true,
      },
      language: {
        type: 'text',
        defaultValue: 'javascript',
      },
    },
  },
}
