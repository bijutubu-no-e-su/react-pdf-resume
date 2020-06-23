import React, { ReactNode } from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

type propsType = {
  style?: {};
  size: string;
  blod?: boolean;
  children: ReactNode;
};
export default (props: propsType) => {
  const sizes = {
    large: 14,
    normal: 10,
    small: 6,
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: props.size || sizes.normal,
      fontFamily: props.blod ? 'Nasu-Bold' : 'Nasu-Regular',
      padding: 1,
      ...props.style,
    },
  });

  return <Text style={styles.text}>{props.children}</Text>;
};
