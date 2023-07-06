import React from 'react'
import { TemplateName } from './TemplateName'

const TemplateNameMeta = {
    title: 'TemplateName',
    component: TemplateName,
    decorators: [(Story: typeof TemplateName) => <Story />],
}

export default TemplateNameMeta

export const Basic = {}
