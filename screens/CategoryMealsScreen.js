import React from 'react';
import { View, Text, StyleSheet, Button ,Platform, FlatList, Image} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {useSelector} from 'react-redux';
import MealsGridTile from '../components/MealsGridTile';
import MealList from '../components/MealList';



const CategoriesMealsScreen = (props)=>{
    
   
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const meals = availableMeals.filter((meal)=> meal.categoryIds.indexOf(catId)>=0);


    let renderScreen = <MealList meals={meals} navigation={props.navigation}/>
    if(meals.length===0)
    {
        renderScreen = <View style={styles.noItemView}><Text style={styles.noItem}>No Meals available in selected category</Text></View>
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
        textAlign:'center',
      
    },
    noItemView:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
});

export default CategoriesMealsScreen;