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
import { ICoverLetter } from "../../../services/coverletterEditor/coverletterEditorSlice";

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
// import coverLetter from "../coverLetter";

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

export interface ISydney {
  coverLetter: ICoverLetter;
}
const SydneyPDF: React.FC<ISydney> = ({ coverLetter }) => {
  const commonStyle = styleVienna.common;
  const style = coverLetter.style;

  const styles = StyleSheet.create({
    container: commonStyle.container,
    header: {
      display: "flex",
      justifyItems: "start",
      justifyContent: "flex-start",
      flexDirection: "row",
      gap: "6vh",
    },
    headerDivOne: {
      maxWidth: "140.2px",
    },
    headerDivTwo: {
      width: "100%",
    },
    fullName: {
      ...style.fullName,
      textAlign: style.fullName.textAlign as any,
      lineHeight: 1,
    },
    JobTitle: {
      ...style.JobTitle,
      textAlign: style.JobTitle.textAlign as any,
    },
    email: {
      ...style.email,
      textAlign: style.email.textAlign as any,
    },
    phoneNumber: {
      ...style.phoneNumber,
      textAlign: style.phoneNumber.textAlign as any,
    },
    address: {
      ...style.address,
      textAlign: style.address.textAlign as any,
    },
    managerName: {
      ...style.managerName,
      textAlign: style.managerName.textAlign as any,
    },
    companyName: {
      ...style.companyName,
      textAlign: style.companyName.textAlign as any,
    },
    nameAndCompany: {
      margin: "15px auto",
      color: "#ffffff",
      fontWeight: 600,
      fontSize: "18px",
      padding: "4px 10px ",
      fontFamily: "Nunito Sans",
      backgroundColor: style.theme,
      display: "flex",
      flexDirection: "row",
      gap: "1vh",
    },
    details: {
      ...style.details,
      textAlign: style.details.textAlign as any,
      marginTop: "10px",
      paddingTop: "10px",
      borderTopWidth: "4px",
      borderColor: style.theme,
    },
  });

  return (
    <Document>
      <Page style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerDivOne}>
            <Text style={styles.fullName}>{coverLetter.fullName}</Text>
          </View>
          <View style={styles.headerDivTwo}>
            <Text style={styles.JobTitle}>{coverLetter.JobTitle}</Text>
            <Text style={styles.email}>{coverLetter.email}</Text>
            <Text style={styles.phoneNumber}>{coverLetter.phoneNumber}</Text>
            <Text style={styles.address}>{coverLetter.address}</Text>
          </View>
        </View>
        <View style={styles.nameAndCompany}>
          <Text>TO :</Text>
          <Text style={styles.managerName}>{coverLetter.managerName}</Text>
          <Text style={styles.companyName}>{coverLetter.companyName}</Text>
        </View>
        <Text style={styles.details}>{coverLetter.details}</Text>
      </Page>
    </Document>
  );
};

export default SydneyPDF;
