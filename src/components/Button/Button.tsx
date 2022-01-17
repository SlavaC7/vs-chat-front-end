import React from 'react'
import styled from 'styled-components/native'
import { FLEX, FONT } from '../../utils/css'
import { ButtonTemplates } from './templates'
import { IButtonProps, TButtonTemplate } from './types'

export const CustomButton: React.FC<IButtonProps> = ({
  title,
  onPress,
  template = 'default',
  enableAutoSize = false,
  style,
  textStyle,
  disabled = false,
  image
}) => {
  return (
    <TouchContainer
      template={ButtonTemplates[template]}
      enableAutosize={enableAutoSize}
      onPress={onPress}
      style={style}
      disabled={disabled}
      image={image}
    >
      {!!image && <Image source={image} />}
      <Title style={textStyle} template={ButtonTemplates[template]}>{title}</Title>
    </TouchContainer>
  )
}
const TouchContainer = styled.TouchableOpacity<{
  template: TButtonTemplate
  enableAutosize: boolean
  disabled: boolean
  image: any
}>`
  ${({ template, disabled }) => `
      background: ${template.backgroundColor};
      border: 1px solid ${template.borderColor};
      opacity: ${disabled ? '0.5' : '1'};
      border-radius: ${template.borderRadius}px;
      width: ${template.width};
      padding: ${template.padding}px ${template.paddingHorizontal}px;
      `}

  ${({ image }) => {
    return FLEX({
      direction: 'row',
      align: 'center',
      justify: 'center',
      wrap: 'wrap',
    })
  }}
`

const Title = styled.Text<{
  template: TButtonTemplate
}>`
  text-align: center;
  flex:1;
  ${({ template }) => FONT(template.slug == "default" ? 'Bold' : 'Medium', template.fontSize, template.fontColor)}
`

const Image = styled.Image`
  margin-left: 13px;
  margin-right: 15px;
`
