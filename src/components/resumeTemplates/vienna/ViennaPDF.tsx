/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Image,
  Text,
} from "@react-pdf/renderer";
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
    text: {
      textAlign: styleVienna.require.personalInfo.firstName.textAlign as any,
      fontSize: styleVienna.require.personalInfo.firstName.fontSize as any,
    },
  });

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerDivOne}>
            <Image src={resume.avatar.url} />
          </View>
          <Text style={styles.text}>Section #1</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ViennaPDF;
