import React, { FC } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Header from 'components/molecules/Header';
import Content from 'components/molecules/History/Content';

// Crconst styles = StyleSheet.create({
const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { textAlign: 'center', margin: 30 },
  title: { textAlign: 'center', padding: 100 },
  screen: {
    padding: 10,
  },
});

const MyDocument: FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.screen}>
        <Header title="職務経歴書" createDate="11000" />
      </View>
    </Page>
    <Content abouts={['']} contents={['', '', '']} />
  </Document>
);

export default MyDocument;
