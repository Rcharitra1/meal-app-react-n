import React from 'react';
import { View, Text, StyleSheet, Button ,Platform, FlatList, Image} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsGridTile from '../components/MealsGridTile';
import MealList from '../components/MealList';



const CategoriesMealsScreen = (props)=>{
    
   
    const catId = props.navigation.getParam('categoryId');

    const meals = MEALS.filter((meal)=> meal.categoryIds.indexOf(catId)>=0);


    let renderScreen = <MealList meals={meals} navigation={props.navigation}/>
    if(meals.length===0)
    {
        renderScreen = <View><Text style={styles.noItem}>No Meals available in selected category</Text></View>
    }

    return(
        <View style={styles.screen}>
         {renderScreen}
        </View>
    );
}




CategoriesMealsScreen.navigationOptions=(navigationData)=>{
    const cid = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(item=> item.id===cid);
    return{
        headerTitle:selectedCategory.title,
        
    }; 
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    noItem:{
        fontFamily:'open-sans',
        fontSize:22,
        textAlign:'center'
    }
});

export default CategoriesMealsScreen;