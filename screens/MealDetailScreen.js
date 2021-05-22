import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetailTile from '../components/MealDetailTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HelperButton';

const MealDetailScreen = (props)=>{
    const mealId = props.navigation.getParam('mealId');
    const meal = MEALS.find((item)=> item.id === mealId);
    
    return(
        <View style={styles.screen}>
            <MealDetailTile ingredients={meal.ingredients} steps ={meal.steps} title = {meal.title} image={meal.imageUrl}/>
          
        </View>
    );
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId =navigationData.navigation.getParam('mealId');
    const meal = MEALS.find((item)=> item.id === mealId);
    return {
        headerTitle: meal.title,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Fav' iconName='ios-star' onPress={()=>{console.log('Fav')}}/>
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    }
});

export default MealDetailScreen;

// <Button title='home' onPress={()=>{
//     props.navigation.popToTop();
// }}/>