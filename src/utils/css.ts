import { Dimensions, ScaledSize } from 'react-native'

export type TFlexDirectionVariants =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'
export type TFlexAlignVariants =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
export type TFlexJustifyVariants =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end'
export type TFlexWrapVariants = 'wrap' | 'nowrap'
export interface IFlexConstructor {
  (
    direction?: TFlexDirectionVariants,
    align?: TFlexAlignVariants,
    justify?: TFlexJustifyVariants,
    wrap?: TFlexWrapVariants,
  ): string
}

export type TFlexConstructorArgs = {
  wrap?: TFlexWrapVariants
  align?: TFlexAlignVariants
  justify?: TFlexJustifyVariants
  direction?: TFlexDirectionVariants
}

export const FLEX: TCSSConstructor<TFlexConstructorArgs> = ({
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
}) => {
  return `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
  `
}

interface IResponsibleOnePartyAction {
  (pxTo: number): boolean
}
interface IResponsibleMultiPartyAction {
  (pxFrom: number, pxTo: number): boolean
}
type TDeviceSelector = boolean

const oneParty: IResponsibleOnePartyAction = pxTo =>
  Math.round(Dimensions.get('window').width) <= pxTo
const multiParty: IResponsibleMultiPartyAction = (from, to) => {
  const height = Math.round(Dimensions.get('screen').height)
  return height <= to && height >= from
}
export const isDeviceS: TDeviceSelector = !!(
  (oneParty(360) && multiParty(0, 664)) ||
  oneParty(320)
)
export const isDeviceM: TDeviceSelector = !!multiParty(667, 736)

type IDeviceSizeProps = {
  s: boolean
  m: boolean
  select: IDeviceSizeSelectProps
}

interface IDeviceSizeSelectProps {
  (size: { s?: any; m?: any; _default?: any }): any
}

export const isDeviceSize: IDeviceSizeProps = {
  s: isDeviceS,
  m: isDeviceM,
  select: ({ s = null, m = null, _default = null }) => {
    if (isDeviceS && s) return s
    if (isDeviceM && m) return m
    return _default
  },
}
type TDimenstions = {
  screen: ScaledSize
  window: ScaledSize
}
export const DIMENSIONS: TDimenstions = {
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window'),
}

export const FontFamily: string = 'IBMPlexSans'

export type TFontVariants =
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'

export interface IFontConstructor {
  (type?: TFontVariants, size?: number, color?: string): string
}

export const FONT: IFontConstructor = (
  type = 'Regular',
  size = 20,
  color = '#000000',
) => {
  return `
      font-family: '${FontFamily}-${type}';
      font-size: ${size}px;
      color: ${color};
    `
}

export type TCSSConstructor<T> = (props: T) => string

export type TShadowConstructorArgs = {
  x?: number
  y?: number
  blur?: number
  color?: string
}

export const SHADOW: TCSSConstructor<TShadowConstructorArgs> = ({
  x = 0,
  y = 0,
  blur = 6,
  color = 'black',
}) => {
  return `
    box-shadow: ${x}px ${y}px ${blur}px ${color};
  `
}
