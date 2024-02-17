/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Image,
  Text,
  Font,
} from "@react-pdf/renderer";
import styleVienna from "./ViennaStyle";

import { resume } from "../resume";
import {
  AdventPro,
  Nunito,
  NunitoSans,
  OpenSans,
  Palanquin,
  PlayfairDisplay,
  Poppins,
  Roboto,
} from "../../../utils/font";

Font.register({
  family: "Advent Pro",
  fonts: AdventPro,
});

Font.register({
  family: "Roboto",
  fonts: Roboto,
});

Font.register({
  family: "Poppins",
  fonts: Poppins,
});

Font.register({
  family: "Nunito",
  fonts: Nunito,
});

Font.register({
  family: "Nunito Sans",
  fonts: NunitoSans,
});

Font.register({
  family: "Open Sans",
  fonts: OpenSans,
});

Font.register({
  family: "Palanquin",
  fonts: Palanquin,
});

Font.register({
  family: "Playfair Display",
  fonts: PlayfairDisplay,
});

const ViennaPDF: React.FC = () => {
  const styles = StyleSheet.create({
    container: styleVienna.common.container,
    header: {
      display: "flex",
      gap: "20px",
    },
    headerDivOne: styleVienna.common.headerDivOne,
    headerDivTwo: styleVienna.common.headerDivTwo,

    text2: {
      textAlign: styleVienna.require.personalInfo.firstName.textAlign as any,
      fontSize: styleVienna.require.personalInfo.firstName.fontSize as any,
      fontFamily: "Open Sans",
      fontWeight: 200,
    },
    text22: {
      textAlign: styleVienna.require.personalInfo.firstName.textAlign as any,
      fontSize: styleVienna.require.personalInfo.firstName.fontSize as any,
      fontFamily: "Nunito Sans",
      fontWeight: 200,
    },

    text4: {
      textAlign: styleVienna.require.personalInfo.firstName.textAlign as any,
      fontSize: styleVienna.require.personalInfo.firstName.fontSize as any,
      fontFamily: "Open Sans",
      fontWeight: 400,
    },

    text6: {
      textAlign: styleVienna.require.personalInfo.firstName.textAlign as any,
      fontSize: styleVienna.require.personalInfo.firstName.fontSize as any,
      fontFamily: "Open Sans",
      fontWeight: 600,
    },
    text7: {
      textAlign: styleVienna.require.personalInfo.firstName.textAlign as any,
      fontSize: styleVienna.require.personalInfo.firstName.fontSize as any,
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
  });

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerDivOne}>
            <Image src={resume.avatar.url} />
          </View>
          <Text style={styles.text2}>Section #2</Text>
          <Text style={styles.text22}>Section #2</Text>
          <Text style={styles.text4}>Section #4</Text>
          <Text style={styles.text6}>Section #6</Text>
          <Text style={styles.text7}>Section #7</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ViennaPDF;
