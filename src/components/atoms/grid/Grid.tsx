import React, { ReactNode } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

type propsType = {
  subTitle: string;
  borderLeft: number;
  borderRight: number;
  borderTop: number;
  borderBottom: number;
  children: ReactNode;
  style: {};
};

const Grid = (props: propsType) => {
  const styles = StyleSheet.create({
    grid: {
      flexDirection: 'row',
      borderLeftWidth: props.borderLeft ? 1 : 0,
      borderRightWidth: props.borderRight ? 1 : 0,
      borderTopWidth: props.borderTop ? 1 : 0,
      borderBottomWidth: props.borderBottom ? 1 : 0,
      ...props.style,
    },
  });

  return <View style={styles.grid}>{props.children}</View>;
};
export default Grid;
