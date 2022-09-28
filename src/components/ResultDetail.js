import React from 'react';
import {View, TextInput, StyleSheet, Text, FlatList, Image} from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={{fontWeight:'bold'}}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
       marginLeft:10,
    },
    image:{
      width: 250,
      height: 120,
      borderRadius:4,
    },
});

export default ResultsDetail;
