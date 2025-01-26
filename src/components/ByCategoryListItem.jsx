import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

const ByCategoryListItem = ({item, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={{marginRight: 5}}>
          <Image style={styles.categoryimg} source={{uri: item.strMealThumb}} />
        </View>
        <View style={styles.innerbox}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#023047'}}>
            {item.strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ByCategoryListItem;

const styles = StyleSheet.create({
  container: {
    verticalAlign: 'middle',
    backgroundColor: 'ghostwhite',
    margin: 10,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingVertical: 12,
  },
  categoryimg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  innerbox: {
    flex: 1,
  },
});
