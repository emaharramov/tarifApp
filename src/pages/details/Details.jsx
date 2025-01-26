import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading';
import DetailItem from '../../components/DetailItem';
import {FlatList} from 'react-native-gesture-handler';

const Details = ({route}) => {
  const {idMeal} = route.params;
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal;
  const {loading, data, error} = useFetch(url);

  if (error) {
    return (
      <View style={{flex: 1}}>
        <Text>{error}</Text>
        <Error />
      </View>
    );
  }
  if (loading) {
    return <Loading />;
  }

  const renderProducts = ({item}) => <DetailItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderProducts}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
