import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Image, Alert, ScrollView, ImageBackground, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#465881"
    }

  });

const ProfileScreen  = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const DATA= [{imgurl:'https://reactjs.org/logo-og.png', Fname: 'Bob', Lname: 'Dog', age: '24', bio: 'hi'},{imgurl:'https://reactjs.org/logo-og.png', Fname: 'Bob', Lname: 'Dog', age: '24', bio: 'hi'}, ,{imgurl:'https://reactjs.org/logo-og.png', Fname: 'Bob', Lname: 'Dog', age: '24', bio: 'hi'}, ,{imgurl:'https://reactjs.org/logo-og.png', Fname: 'Bob', Lname: 'Dog', age: '24', bio: 'hi'}]
    return(
        <View style={{flex: 1, color: 'white'}}>
        <View style={{height:75, backgroundColor:'white'}}></View>
        <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'white'}}>
          <View style={{ justifyContent:'center'}}>
            <Text style={{fontSize: 20, color: 'lightgray'}}>Hello, </Text>
            <Text style={{fontWeight: 'bold', fontSize: 50}}>Aryan </Text>
          </View>
          <View style={{width:50, backgroundColor:'white'}}></View>
  
          <View style={{backgroundColor:'white'}}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 100, height: 100, borderRadius: 100}} />
          </View>
      </View>
  
      <View style={{height:50, backgroundColor:'white'}}></View>
      <View style={{ padding: 10, backgroundColor:'white'}}>
        <Searchbar style={{borderRadius: 15,  alignSelf: 'center', }} 
            placeholder="Search"
            value={searchQuery}
        />
      </View>
  
      <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
        { DATA.map( DATA=>{
        return(
          <View style={{ flex: 1, backgroundColor: 'white',padding: 25}}>
            <ImageBackground source={{uri: DATA.imgurl}} resizeMode="cover" style={{flex: 1, justifyContent: 'flex-end', height: 400, shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 5,shadowOpacity: 1.0}} imageStyle={{ borderRadius: 25}}>
              <View style={{justifyContent: 'center', borderBottomEndRadius: 25, borderBottomLeftRadius: 25, alignContent: 'center', backgroundColor: 'white'}}>
                <View style={{flexDirection:'row' ,justifyContent: 'flex-start', borderBottomEndRadius: 25, borderBottomLeftRadius: 25}}>
                  <View style={{borderBottomEndRadius: 25, borderBottomLeftRadius: 25, padding: 10}}>
                    <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 80, height: 80, borderRadius: 100}} />
                  </View>
                  <View style={{borderBottomEndRadius: 25, borderBottomLeftRadius: 25, padding: 10, alignSelf: 'center', color: 'black'}}>
                    <Text style={{alignSelf: "center", fontWeight: 'bold', fontSize: 20}}> {`${DATA.Fname} ${DATA.Lname}`}</Text>
                    <Text style={{alignSelf: "left", fontWeight: 'light', color: 'lightgray', fontSize: 17}}> {`${DATA.bio}`}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        );
        })}
      </ScrollView>
    </View>
    );
}

export default ProfileScreen