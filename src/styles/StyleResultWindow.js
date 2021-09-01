import {StyleSheet, View} from "react-native";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';


export const StyleResultWindow = styled.Text.attrs(() => ({
    adjustsFontSizeToFit: true,
    numberOfLines: 1,
    textAlign: 'right',
    textAlignVertical: 'bottom',
}))`
    color: white;
    
    font-size: ${(Dimensions.get('window').height * 0.12).toFixed(0)}px;
    margin-left: ${({space}) => space === 1 ? 0 : (Dimensions.get('window').width * 0.8 / 20).toFixed(0)}px;
    align-self: flex-end;

`
// position: absolute;
// right: 0;
// align-self: flex-end;

// margin-top: ${(Dimensions.get('window').height * 0.25).toFixed(0)}px;
