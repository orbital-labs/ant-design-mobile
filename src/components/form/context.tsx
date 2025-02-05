import React from 'react'
import { FormLayout } from '.'
import type { Meta, InternalNamePath } from 'rc-field-form/lib/interface'

export type FormContextType = {
  name?: string
  hasFeedback: boolean
  layout: FormLayout
  requiredMarkStyle: 'asterisk' | 'text-required' | 'text-optional' | 'none'
}

export const defaultFormContext: FormContextType = {
  name: undefined,
  hasFeedback: true,
  layout: 'vertical',
  requiredMarkStyle: 'asterisk',
}

export const FormContext =
  React.createContext<FormContextType>(defaultFormContext)

export type OnSubMetaChange = (
  meta: Meta & { destroy?: boolean },
  namePath: InternalNamePath
) => void
export const NoStyleItemContext = React.createContext<OnSubMetaChange | null>(
  null
)
