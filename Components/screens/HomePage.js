import 'react-native-gesture-handler';
import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantList from '../common/RestaurantList';
import { ScrollView } from 'react-native-gesture-handler';
import { ALL_RESTAURANTS_IN_WISHLIST, RESTAURANTS } from '../../utils/queries';

const HomePage = (props) => {
  const { loading, error, data } = useQuery(RESTAURANTS);
  const wishlist = useQuery(ALL_RESTAURANTS_IN_WISHLIST);

  if (loading || wishlist.loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
    return (
      <View>
        <Text>error...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <RestaurantList
        restaurants={data.restaurants}
        wishlist={wishlist.data}
        {...props}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomePage;
