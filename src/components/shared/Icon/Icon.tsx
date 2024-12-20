'use client'
import IcomoonReact from 'icomoon-react'
import React from 'react'
import IconPack from '@/components/assets/icon/selection.json'
import { IconProps } from '@/components/types/types'
import { useTheme } from 'next-themes'

const Icon = (props: IconProps) => {
  const {theme} = useTheme()
  
  return (
    <IcomoonReact iconSet={IconPack} {...props} size={props.size ?? '24px'} color={`${theme === 'light' ? '#080814' : 'white' }`}  />
  )
}

export default Icon