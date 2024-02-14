import React from "react";
import { Page, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import styleVienna from "./ViennaStyle";

import { resume } from "../resume";
// Create styles

const ViennaPDF: React.FC = () => {
  const styles = StyleSheet.create({
    container: styleVienna.common.container,
    header: {
      display: "flex",
      gap: "20px",
    },
    headerDivOne: styleVienna.common.headerDivOne,
    headerDivTwo: styleVienna.common.headerDivTwo,
  });

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerDivOne}>
            <Image src={resume.avatar.url} />
          </View>
          <View style={styles.headerDivTwo}>Section #1</View>
        </View>
      </Page>
    </Document>
  );
};

export default ViennaPDF;
