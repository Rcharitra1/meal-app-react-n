import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HelperButton';
import Colors from '../constants/colors';
import {setFilters} from '../store/actions/meals';
import {useDispatch} from 'react-redux';

const FilterSwitch = props =>{
    return(
        <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch trackColor={{true: Colors.primary, false:'' }}
        thumbColor={Platform.OS==='android'?Colors.primary: ''}
         value={props.currentState} onValueChange={props.onValueChange}/>

        </View>
    );
}

const FiltersScreen = (props)=>{
    const {navigation} = props;
    const [isGlutenFree, setIsGlutenFree]=useState(false)
    const [isVegan, setIsVegan]=useState(false)
    const [isVegetarian, setIsVegetarian]=useState(false)
    const [isLactoseFree, setIsLactoseFree]=useState(false)

   const dispatch = useDispatch();

    const saveFilters = useCallback(()=>{
        const appliedFilters = {
            glutenfree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            vegatarian:isVegetarian
        };
        dispatch(setFilters(appliedFilters));
    }, [isVegetarian, isVegan, isLactoseFree, isGlutenFree])
    useEffect(()=>{
        navigation.setParams({save: saveFilters})
    }, [saveFilters])
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/Restrictions</Text>
            <FilterSwitch currentState={isGlutenFree} onValueChange={()=>{setIsGlutenFree(!isGlutenFree)}} label={'Gluten-Free'}/>
            <FilterSwitch currentState={isLactoseFree} onValueChange={()=>{setIsLactoseFree(!isLactoseFree)}} label={'Lactose-Free'}/>
            <FilterSwitch currentState={isVegan} onValueChange={()=>{setIsVegan(!isVegan)}} label={'Vegan'}/>
            <FilterSwitch currentState={isVegetarian} onValueChange={()=>{setIsVegetarian(!isVegetarian)}} label={'Vegeterian'}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        margin: 20
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '80%',
        marginVertical:10
    }
});

FiltersScreen.navigationOptions=navData =>{
    return{
        headerTitle:'Filters',
        headerLeft : ()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/>
        </HeaderButtons>,
        headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName='ios-save' onPress={
            navData.navigation.getParam('save')
        }/>
        </HeaderButtons>
    }
}



export default FiltersScreen;