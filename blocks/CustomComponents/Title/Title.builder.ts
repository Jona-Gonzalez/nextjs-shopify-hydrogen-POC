import { Builder } from '@builder.io/react'
import { Title } from './Title'

Builder.registerComponent(Title, {
  name: 'Title',
  description: 'Title component',
  inputs: [
    {
      name: 'variant',
      type: 'string',
    },
    {
      name: 'text',
      type: 'string',
    },
  ],
})
