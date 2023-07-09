import React, { FC } from 'react'
import { SelectGender } from './SelectGender'
import { StepProvider, SelectGenderProvider } from '@/entities'

const SelectGenderMeta = {
    title: 'Entity/Auth/SelectGender',
    component: SelectGender,
    decorators: [
        (Story: FC) => (
            <StepProvider data={{ maxStep: 6 }}>
                <SelectGenderProvider>
                    <Story />
                </SelectGenderProvider>
            </StepProvider>
        ),
    ],
}

export default SelectGenderMeta

export const Basic = {}
