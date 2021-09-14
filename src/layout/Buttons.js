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

function appendNumber(setArr, arr,
                      setPrev, prev,
                      num, operator,
                      isSecond, setSecond) {
    if ((arr.length === 0 || Number(arr.join('')) === 0) && num === 0) {
        setArr([])
    } else {
        if (isSecond) {
            setArr(arr => [])
            setSecond(false)
        }
        if (arr[0] === "-") {
            if (arr.length < 10) {
                setArr(arr => [...arr, num])
            }
        } else {
            if (arr.length < 9) {
                setArr(arr => [...arr, num])
            }
        }
    }
}

function migrateValue(arr, operator, setPrev, setArr, setOperator, setIsSecondNum){
    if (arr.length > 0) {
        setPrev(() => [...arr])
        setIsSecondNum(true)
    }
    setOperator(operator)
}

function calculate(prev, now, operator, setArr, setOperator) {
    switch (operator) {
        case '÷':
            setArr([Number(prev.join('')) / Number(now.join(''))])
            break
        case '×':
            setArr([Number(prev.join('')) * Number(now.join(''))])
            break
        case '+':
            setArr([Number(prev.join('')) + Number(now.join(''))])
            break
        case '-':
            setArr([Number(prev.join('')) - Number(now.join(''))])
            break
        default:
            break
    }
    setOperator('')
}


function getClear(calcResult) {
    if (calcResult.length === 0) {
        return 'AC'
    } else if (Number(calcResult.join('')) === 0) {
        return 'AC'
    } else {
        return 'C'
    }
}

export const Buttons = ({calcResult, setCalcResult, prevCalcResult, setPrevCalcResult, operator, setOperator, style}) => {
    const [isSecondNum, setIsSecondNum] = useState(false)

    return (
        <View style={[style]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title={getClear(calcResult)}
                            onPress={() => {
                                setCalcResult([])
                                setOperator('')
                            }} />

                <CalcButton title="+/-" onPress={() => {setSign(setCalcResult, calcResult)}} />
                <CalcButton title="%" onPress={() => {setCalcResult([calcResult.join('')/100])}} />
                <CalcButton title="÷" operator={operator} onPress={() => {migrateValue(calcResult, '÷', setPrevCalcResult, setCalcResult, setOperator, setIsSecondNum)}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="7" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 7, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="8" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 8, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="9" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 9, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="×" operator={operator} onPress={() => {migrateValue(calcResult, '×', setPrevCalcResult, setCalcResult, setOperator, setIsSecondNum)}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="4" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 4, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="5" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 5, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="6" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 6, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="-" operator={operator} onPress={() => {migrateValue(calcResult, '-', setPrevCalcResult, setCalcResult, setOperator, setIsSecondNum)}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="1" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 1, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="2" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 2, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="3" onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 3, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="+" operator={operator} onPress={() => {migrateValue(calcResult, '+', setPrevCalcResult, setCalcResult, setOperator, setIsSecondNum)}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                <CalcButton title="0" space={2} onPress={() => {appendNumber(setCalcResult, calcResult, setPrevCalcResult, prevCalcResult, 0, operator, isSecondNum, setIsSecondNum)}} />
                <CalcButton title="." onPress={() => {putDecimal(setCalcResult, calcResult)}} />
                <CalcButton title="=" operator={operator} onPress={() => {calculate(prevCalcResult, calcResult, operator, setCalcResult, setOperator)}} />
            </View>
        </View>
    );
};
