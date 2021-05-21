import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native'

const CategoryGridTile = (props)=>{
   
    return (
        <TouchableOpacity  style={{...styles.gridItem, backgroundColor:props.color}} onPress={props.onSelect}>
        <View><Text style={styles.gridText} numberOfLines={2}>{props.title}</Text></View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:175,
        borderRadius:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        padding:10,
        shadowColor:'grey',
        shadowOpacity:0.75,
        shadowOffset:{
            width:0,
            height:10
        },
        shadowRadius:10,
        elevation:3
    },
    gridText:{
        color:'white',
        fontSize:16,
        fontFamily:'open-sans-bold',
        textAlign:'right'
    }
})

export default CategoryGridTile