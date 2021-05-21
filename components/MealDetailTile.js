import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import Colors from '../constants/colors'

const MealDetailTile = (props)=>{
    const {steps, ingredients} = {...props}
    let stepsMarkup = <View>No steps to show</View>
    let ingredientsMarkup = <View>No Ingredients </View>

    if(steps.length>0)
    {
        stepsMarkup = steps.map((item, index)=>{
            return <View style={styles.stepsStyle} key={index}><Text style={{...styles.ingredientItem, color:'white'}}>{item}</Text></View>
        })
    }
    if(ingredients.length>0)
    {
        ingredientsMarkup = ingredients.map((item, index)=>{
            return <View style={{marginHorizontal:5}}  key={index}><Text style={{...styles.ingredientItem, fontStyle:'italic'}}>{`\u2022  ${item}`}</Text></View>
        })
    }
    

    
    return(
        <ScrollView>
        <View>
        <View style={styles.headerBar}>
        <ImageBackground source={{uri: props.image}} style={styles.bg}>
        <Text style={styles.titleText} numberOfLines={1}>{props.title}</Text>
        </ImageBackground>
        </View>
        <Text style={styles.sectionTitle}>Ingredients you'll need</Text>
        {ingredientsMarkup}
        <Text style={styles.sectionTitle}>Steps to follow</Text>
        {stepsMarkup}

        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    bg:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    headerBar:{
        height:200,
        marginBottom:10
    },
    titleText:{
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        textAlign:'center',
        fontSize:20,
        fontFamily:'open-sans-bold',
        color:'white',
        paddingVertical:4,
        paddingHorizontal:10
    },
    ingredientItem:{
        fontSize:16,
        fontFamily:'open-sans',
        marginVertical:5,
    },
    stepsStyle:{
        backgroundColor:Colors.primary,
        borderRadius:4,
        overflow:'hidden',
        margin:5,
        paddingHorizontal:10,
        shadowRadius:4,
        shadowOffset:{
            height:4,
            width:0
        },
        shadowOpacity:0.5,
        shadowColor:'black',
        elevation:4,
    },
    sectionTitle:{
        fontSize:18,
        fontFamily:'open-sans-bold',
        marginHorizontal:20,
        marginVertical:10
    }
})

export default MealDetailTile
