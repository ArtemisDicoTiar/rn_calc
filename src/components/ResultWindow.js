import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {StyleResultWindow} from "../styles/StyleResultWindow";

function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}


export const ResultWindow = ({calcResult, style}) => {
    return (
        <View style={[style]}>
            <View style={{flex:7}}/>
            <View style={{flex:3}}>
                <StyleResultWindow >
                    {calcResult.length === 0 ? 0 : commafy(calcResult.join('')) }
                </StyleResultWindow>
            </View>
        </View>
    )
};



