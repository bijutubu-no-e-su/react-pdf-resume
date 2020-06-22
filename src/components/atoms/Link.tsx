import React, { ReactNode } from 'react';
import { Link, StyleSheet } from '@react-pdf/renderer';

type propsType = {
  style: {};
  size: number | string;
  blob?: boolean;
  children: ReactNode;
  src: string;
};
export default (props: propsType) => {
  const sizes = {
    large: 14,
    normal: 10,
  };

  const styles = StyleSheet.create({
    link: {
      fontSize: props.size || 'normal',
      fontFamily: props.blob ? 'Nas-Bold' : 'Nasu-Regular',
      padding: 1,
      ...props.style,
    },
  });

  return (
    <Link src="" style={styles.link}>
      {props.children}
    </Link>
  );
};
