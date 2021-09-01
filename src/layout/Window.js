import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {ResultWindow} from "../components/ResultWindow";

export const Window = ({calcResult, style}) => {
    return (
        <View style={[style]}>
            <ResultWindow style={style} calcResult={calcResult}/>
        </View>
    )
};
