import React from 'react';
import { View, Text, StyleSheet, Button ,Platform, FlatList, Image} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsGridTile from '../components/MealsGridTile';




const CategoriesMealsScreen = (props)=>{
    
    const renderMealItem = (itemData)=>{
        return(
            <MealsGridTile title={itemData.item.title}
            complexity={itemData.item.complexity}
            duration = {itemData.item.duration}
            image = {itemData.item.imageUrl}
            afforadability = {itemData.item.afforadability} 
            onSelectMeal={()=>{
                props.navigation.navigate({routeName: 'MealDetail', 
        params:{
            mealId:itemData.item.id
        }})}}/>
        );
    }
    const catId = props.navigation.getParam('categoryId');
    // console.log(catId)

    const meals = MEALS.filter((meal)=> meal.categoryIds.indexOf(catId)>=0);
    // console.log(meals);

    let renderScreen = <FlatList data={meals} keyExtractor={(item, index)=> item.id}
    style={{width:'100%'}}
    renderItem={renderMealItem}
    />
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