import React, { FC } from 'react'
import { TemplateName } from './TemplateName'

const TemplateNameMeta = {
    title: 'TemplateName',
    component: TemplateName,
    decorators: [(Story: FC) => <Story />],
}

export default TemplateNameMeta

export const Basic = {}
