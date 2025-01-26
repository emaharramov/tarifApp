import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailItem = ({item}) => {
  youtubeurl = item.strYoutube;
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: item.strMealThumb}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.subtitle}>
          {item.strCategory} - {item.strArea}
        </Text>
        <Text style={styles.instructions}>{item.strInstructions}</Text>
        <Text style={styles.ingredientsTitle}>İçindekiler</Text>
        <View style={styles.ingredientsContainer}>
          {renderIngredients(item)}
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(youtubeurl);
          }}>
          <View style={styles.youtubebutton}>
            <Text style={{color:"white"}}>Youtube video</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const renderIngredients = item => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    if (item[ingredientKey]) {
      ingredients.push(
        <View key={i} style={styles.ingredientItem}>
          <Text style={styles.ingredientName}>{item[ingredientKey]}</Text>
          <Text style={styles.measure}>{item[measureKey]}</Text>
        </View>,
      );
    }
  }
  return ingredients;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkorange',
  },
  youtubebutton: {
    alignItems:'center',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#FF0000',
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  ingredientsContainer: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  ingredientName: {
    flex: 1,
    fontSize: 16,
    color: '#FF5722',
  },
  measure: {
    fontSize: 16,
    color: '#FF5722',
  },
});
export default DetailItem;
