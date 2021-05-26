import React from 'react';
import {  FlatList, View } from 'react-native'
import MealsGridTile from './MealsGridTile';
import {useSelector} from 'react-redux'

const MealList = props =>
{
  const favs = useSelector(state=> state.meals.favoriteMeals);
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
            mealId:itemData.item.id,
            mealTitle:itemData.item.title,
            isFav:favs.some(meal=>meal.id===itemData.item.id)
        }})}}/>
        );
    }
  return(
    <View><FlatList data={props.meals} keyExtractor={(item, index)=> item.id}
    style={{width:'100%'}}
    renderItem={renderMealItem}
    /></View>
  );
}


export default MealList;