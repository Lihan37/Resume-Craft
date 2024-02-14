import React from "react";
import { Page, View, Document, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { resume } from "../resume";
import styleSydney from "./SydneyStyle";
import { image } from "html2canvas/dist/types/css/types/image";

const SydneyPDF: React.FC = () => {
  const styles = StyleSheet.create({
    container: styleSydney.common.container,
    image: styleSydney.common.Image,
    header: {
      display: "flex",
      gap: "20px",
    },
    headerDivOne: styleSydney.common.headerDivOne,
    headerDivTwo: styleSydney.common.headerDivTwo,
    personalInfo: {
      fontFamily: styleSydney.require.personalInfo.firstName.fontFamily,
      fontSize: styleSydney.require.personalInfo.firstName.size,
      fontWeight: styleSydney.require.personalInfo.firstName.fontWeight,
      color: styleSydney.require.personalInfo.firstName.color,
      textAlign: styleSydney.require.personalInfo.firstName.textAlign as any
    }
  });
  return <Document>
    <Page style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} src="https://i.ibb.co/MpZjhN1/Screen-Shot-20231026001002.png" />
        <Text style={styles.personalInfo}> {resume.personalInfo.firstName}</Text>
        <Text>  {resume.personalInfo.lastName}</Text>

      </View>
      <View >
        <View>
         
        </View>
       
      </View>
    </Page>
  </Document>;
};

export default SydneyPDF;
