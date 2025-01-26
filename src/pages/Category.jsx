import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuListItem from "../components/MenuListItem";
import useFetch from "../hooks/useFetch/useFetch";
import Loading from "../components/loading";
import Error from "../components/error/Error";
const Category = ({ navigation }) => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
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
  const HandleFoodSelect = (strCategory) => {
    navigation.navigate("Yemekler", { strCategory });
  };
  const renderProducts = ({ item }) => (
    <MenuListItem
      item={item}
      onSelect={() => HandleFoodSelect(item.strCategory)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderProducts}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkorange",
    paddingVertical: 10,
  },
});
