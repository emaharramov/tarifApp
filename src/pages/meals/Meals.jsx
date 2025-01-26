import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/loading/Loading";
import ByCategoryListItem from "../../components/ByCategoryListItem";
import Error from "../../components/error";

const Meals = ({ route, navigation }) => {
  const { strCategory } = route.params;
  const url =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory;
  const { loading, data, error } = useFetch(url);
  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <Text>{error}</Text>
        <Error />
      </View>
    );
  }
  if (loading) {
    return <Loading />;
  }

  const HandleFoodSelect = (idMeal) => {
    navigation.navigate("Detaylar", { idMeal });
  };
  const renderProducts = ({ item }) => (
    <ByCategoryListItem
      item={item}
      onSelect={() => HandleFoodSelect(item.idMeal)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderProducts}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkorange",
    paddingVertical: 10,
  },
});
