import React, {Component, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import CalcButton from "../components/CalcButton";


function setSign(setArr, arr) {
    if (arr[0] === '-') {
        setArr(arr.slice(1,))
    } else {
        setArr(['-', ...arr])
    }
}


function putDecimal(setArr, arr) {
    if (arr[arr.length-1] === '.') {
        setArr(arr.slice(0, arr.length-1))
    } else {
        if (arr.length < 9) {
            setArr([...arr, '.'])
        }
    }
}


function appendNumber(setArr, arr, num) {
    if (arr[0] === "-") {
        if (arr.length < 10) {
            setArr([...arr, num])
        }
    } else {
        if (arr.length < 9) {
            setArr([...arr, num])
        }
    }

}

export const Buttons = ({calcResult, setCalcResult, style}) => {
    const [operator, setOperator] = useState('');

    return (
        <View style={[style]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title={calcResult.join('') === '' ? "AC" : "C"}
                            onPress={() => {
                                setCalcResult([])
                                setOperator('')
                            }} />

                <CalcButton title="+/-" onPress={() => {setSign(setCalcResult, calcResult)}} />
                <CalcButton title="%" onPress={() => {setCalcResult([calcResult.join('')/100])}} />
                <CalcButton title="÷" operator={operator} onPress={() => {setOperator('÷')}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="7" onPress={() => {appendNumber(setCalcResult, calcResult, 7)}} />
                <CalcButton title="8" onPress={() => {appendNumber(setCalcResult, calcResult, 8)}} />
                <CalcButton title="9" onPress={() => {appendNumber(setCalcResult, calcResult, 9)}} />
                <CalcButton title="×" operator={operator} onPress={() => {setOperator('×')}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="4" onPress={() => {appendNumber(setCalcResult, calcResult, 4)}} />
                <CalcButton title="5" onPress={() => {appendNumber(setCalcResult, calcResult, 5)}} />
                <CalcButton title="6" onPress={() => {appendNumber(setCalcResult, calcResult, 6)}} />
                <CalcButton title="-" operator={operator} onPress={() => {setOperator('-')}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="1" onPress={() => {appendNumber(setCalcResult, calcResult, 1)}} />
                <CalcButton title="2" onPress={() => {appendNumber(setCalcResult, calcResult, 2)}} />
                <CalcButton title="3" onPress={() => {appendNumber(setCalcResult, calcResult, 3)}} />
                <CalcButton title="+" operator={operator} onPress={() => {setOperator('+')}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="0" space={2} onPress={() => {appendNumber(setCalcResult, calcResult, 0)}} />
                <CalcButton title="." onPress={() => {putDecimal(setCalcResult, calcResult)}} />
                <CalcButton title="=" operator={operator} onPress={() => {}} />
            </View>
        </View>
    );
};
