import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
   const { cardSectionStyle } = styles;

   return (
      <View style={cardSectionStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardSectionStyle: {
      backgroundColor: '#FDFCFD',
      borderBottomWidth: 1,
      borderColor: '#EFEDF3',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 5,
      position: 'relative'
   }
};

export default CardSection;