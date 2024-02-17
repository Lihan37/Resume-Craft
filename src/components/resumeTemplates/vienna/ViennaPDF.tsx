/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Image,
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
  });

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerDivOne}>
            <Image src={resume.avatar.url} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ViennaPDF;
