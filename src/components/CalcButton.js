import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {StyleCalcButtonText, StyleCalcButtonTouchableOpacity} from "../styles/StyleCalcButton";
import PropTypes from 'prop-types'

const CalcButton = ({space, title, children, onPress}) => {
    return (
        <StyleCalcButtonTouchableOpacity
            child={children || title}
            onPress={() => onPress()}
            delayLongPres={2000} // 이 파라미터로 길게 누름의 시간을 조절 가능.
            hitSlop={{bottom: 10, top: 10, left: 10, right: 10}}
            pressRetentionOffset={{bottom: 10, top: 10, left: 10, right: 10}}
            space={space}
        >
            <StyleCalcButtonText child={children || title} space={space}>
                {children || title}
            </StyleCalcButtonText>
        </StyleCalcButtonTouchableOpacity>
    );
};

CalcButton.defaultProps = {
    space: 1,
}

//
CalcButton.propTypes = {
    space: PropTypes.number,
}


const styles = StyleSheet.create({
    textInput: {
        width: '90%',
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        textAlign: 'center'
    },
    button: {
        backgroundColor: "gray",
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        borderRadius: 90,

    },
    buttonText: {
        color: "white"
    }
});

export default CalcButton
