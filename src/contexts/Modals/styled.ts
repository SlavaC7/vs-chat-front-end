import {FONT} from './../../utils/css';
import styled from 'styled-components/native';
import {FLEX} from '../../utils/css';

export const ModalContainer = styled.View`
  width: 350px;
  background-color: #ffffff;
  border-radius: 5px;
  ${FLEX({direction: 'column', align: 'flex-start', justify: 'flex-start'})}
`;
export const ModalImage = styled.Image`
  height: 90px;
  width: 100px;
`;
export const ModalMainText = styled.Text`
  ${FONT('SemiBold', 22, '#001737')}
  text-align: left;
`;
export const ModalSecoundText = styled.Text`
  ${FONT('Light', 12.5, '#001737')}
`;
export const RightViewContainer = styled.View`
  ${FLEX({direction: 'row', align: 'flex-end', justify: 'flex-end'})}
`;
export const OneLineContainer = styled.View`
  ${FLEX({direction: 'row', align: 'flex-start', justify: 'flex-start'})}
`;
export const BoldText = styled.Text`
  ${FONT('Bold', 12, '#000000D9')}
`;

export const FieldLabel = styled.Text`
  ${FONT('Medium', 12, '#061939')}
`;
