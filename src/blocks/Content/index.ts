import type { Block, Field } from 'payload/types'

import link from '../../fields/link'
import richText from '../../fields/richText'
import { backgroundColor } from '../../fields/BackgroundColor'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'half',
        label: 'Half',
      },
      {
        value: 'twoThirds',
        label: 'Two Thirds',
      },
      {
        value: 'full',
        label: 'Full',
      },
      {
        value: 'full-wrapped',
        label: 'Full Wrapped',
      },
    ],
  },
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  fields: [backgroundColor,
    
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
