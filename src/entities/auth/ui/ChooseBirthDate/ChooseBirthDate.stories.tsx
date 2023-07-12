import React, { FC } from 'react'
import { ChooseBirthDate } from './ChooseBirthDate'

const ChooseBirthDateMeta = {
    title: 'Entities/Auth/ChooseBirthDate',
    component: ChooseBirthDate,
    decorators: [(Story: FC) => <Story />],
}

export default ChooseBirthDateMeta

export const Basic = {}
