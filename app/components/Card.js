import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   const { cardStyle } = styles;

   return (
      <View style={cardStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardStyle: {
      borderBottomWidth: 0.1,
      borderColor: '#EFEDF3',
      borderRadius: 1,
      borderWidth: 1,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 1
   }
};

export default Card;