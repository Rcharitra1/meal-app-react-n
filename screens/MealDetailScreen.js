import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetailTile from '../components/MealDetailTile';


const MealDetailScreen = (props)=>{
    const mealId = props.navigation.getParam('mealId');
    const meal = MEALS.find((item)=> item.id === mealId);
    
    return(
        <View style={styles.screen}>
            <MealDetailTile ingredients={meal.ingredients} steps ={meal.steps} title = {meal.title} image={meal.imageUrl}/>
          
        </View>
    );
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