/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Page,
  View,
  Document,
  StyleSheet,
  Font,
  Text,
} from "@react-pdf/renderer";
import styleVienna from "./SydneyStyle";

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
import coverLetter from "../coverLetter";

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

const styles = StyleSheet.create({
  container: styleVienna.common.container,
  header: {
    display: "flex",
    justifyItems: "start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  fullName: {},
});
const SydneyPDF: React.FC = () => {
  //   const commonStyle = styleVienna.common;
  //   const style = styleVienna.require;

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.fullName}>{coverLetter.fullName}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default SydneyPDF;
