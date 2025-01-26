import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

const MenuListItem = ({item, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.number}>{item.idCategory}</Text>
        <View style={{marginRight: 5}}>
          <Image
            style={styles.categoryimg}
            source={{uri: item.strCategoryThumb}}
          />
        </View>
        <View style={styles.innerbox}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#023047'}}>
            {item.strCategory}
          </Text>
          <Text numberOfLines={3}>{item.strCategoryDescription}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuListItem;

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
  number: {
    position: 'absolute',
    top: -10,
    left: -2,
    zIndex: 20,
    textAlign: 'center',
    paddingTop: 7,
    borderRadius: 15,
    backgroundColor: '#023047',
    color: 'white',
    height: 35,
    width: 35,
  },
});
