import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ImageBackground } from 'react-native'
import DefaultText from './DefaultText';

const MealsGridTile = (props)=>{
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
        <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
        </ImageBackground>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
        <DefaultText>
        {props.duration}   
        </DefaultText>
        <DefaultText>
        {props.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText>
        {props.afforadability.toUpperCase()}
        </DefaultText>
        </View>
        </View>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealRow:{
        flexDirection: 'row',
    },
    mealItem:{
        height:200,
        backgroundColor:'#ccc',
        margin:10,
        borderRadius:10,
        overflow:'hidden'

    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:'center',
        height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    title:{
        color:'white',
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        paddingVertical:5,
        paddingHorizontal:10,
    }
});

export default MealsGridTile;