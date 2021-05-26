import React from 'react';
import { Text, StyleSheet } from 'react-native'

const DefaultText = props =>{
    return<Text style={{...styles.default, ...props.style}}>{props.children}</Text>
}


const styles = StyleSheet.create({
    default:{
        fontFamily:'open-sans'
    }
})

export default DefaultText;