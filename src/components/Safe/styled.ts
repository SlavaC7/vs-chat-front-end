import styled from 'styled-components/native'
import { FLEX } from '../../utils/css'

export const SafeView = styled.SafeAreaView`
  ${FLEX({ direction: 'column', align: 'center', justify: 'flex-start' })}
`

export const ContentContainer = styled.View`
  width: 100%;
  min-height: 100%;
  
  ${FLEX({ direction: 'column', align: 'center', justify: 'flex-start'  })}
`

export const PressebleContainer = styled.TouchableOpacity`
  flex: 1;
`
