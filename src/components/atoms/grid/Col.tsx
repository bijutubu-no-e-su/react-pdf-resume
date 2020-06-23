import React, { ReactNode } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

type propsType = {
  size: number;
  subTitle: string;
  borderLeft: number;
  borderRight: number;
  borderTop: number;
  borderBottom: number;
  children: ReactNode;
  style: {};
};

const Col = (props: propsType) => {
  const styles = StyleSheet.create({
    col: {
      padding: 3,
      flexGrow: props.size || 1,
      backgroundColor: props.subTitle ? '#E4E4E4' : '#ffffff',
      borderLeftWidth: props.borderLeft ? 1 : 0,
      borderRightWidth: props.borderRight ? 1 : 0,
      borderTopWidth: props.borderTop ? 1 : 0,
      borderBottomWidth: props.borderBottom ? 1 : 0,
      ...props.style,
    },
  });

  return <View style={styles.col}> {props.children}</View>;
};
export default Col;
