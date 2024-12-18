import IcomoonReact from 'icomoon-react'
import React from 'react'
import IconPack from '@/components/assets/icon/selection.json'
import { IconProps } from '@/components/types/types'

const Icon = (props: IconProps) => {
  return (
    <IcomoonReact iconSet={IconPack} {...props} size={props.size ?? '24px'}  />
  )
}

export default Icon