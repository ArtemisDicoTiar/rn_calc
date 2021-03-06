import {StyleSheet, View} from "react-native";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const EtcButtons = ['AC', 'C', '+/-', '%']
const Operators = ['÷', '×', '-', '+', '=']


function getButtonTextColor(child, operator) {
    if (EtcButtons.indexOf(child) === -1) {
        if (child === operator) {
            return '#f19937'
        } else {
            return 'white'
        }
    }
    else {
        return 'black'
    }
}

export const StyleCalcButtonText = styled.Text`
    color: ${ ({child, operator}) =>  getButtonTextColor(child, operator)};
    font-size: ${(Dimensions.get('window').width*0.8 / 8).toFixed(0)}px;
    margin-left: ${ ({space}) => space === 1 ? 0 : (Dimensions.get('window').width*0.8 / 20).toFixed(0)}px;
`

function getButtonColor (child, operator) {

    if (EtcButtons.indexOf(child) !== -1) return '#a5a5a5'
    else if (Operators.indexOf(child) !== -1) {
        if (child === operator) {
            return '#ffffff'
        }
        return '#f19937'
    }
    else return '#323232'
}

export const StyleCalcButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: ${ ({child, operator}) => getButtonColor(child, operator) };
    width: ${ ({space}) => space === 1 ? (Dimensions.get('window').width*0.8 / 4).toFixed(0) 
                                        : (Dimensions.get('window').width*0.86 / 2).toFixed(0)}px;
    height: ${(Dimensions.get('window').width*0.8 / 4).toFixed(0)}px;
    justify-content: center;
    align-items: ${ ({space}) => space === 1 ? 'center' : 'flex-start' };;
    padding: ${(Dimensions.get('window').width*0.8 / 40).toFixed(0)}px;
    border-radius: ${(Dimensions.get('window').width*0.8 / 4).toFixed(0)}px;
`

const StyledInput = styled.TextInput.attrs(({placeholder, theme}) => ({
    placeholder: placeholder || "ENTER a TEXT",
    placeholderTextColor: theme.inputColor,
}))`
  padding: 20px;
  font-size: 20px;
  border: 1px solid ${({theme}) => theme.inputBorder};
`
