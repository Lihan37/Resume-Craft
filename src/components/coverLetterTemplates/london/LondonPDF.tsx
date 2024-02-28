/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Page,
  View,
  Document,
  StyleSheet,
  Font,
  Text,
} from "@react-pdf/renderer";
import styleLondon from "./LondonStyle";
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
const LondonPDF: React.FC<ISydney> = ({ coverLetter }) => {
  const commonStyle = styleLondon.common;
  const style = coverLetter.style;

  const styles = StyleSheet.create({
    container: commonStyle.container,
    body: {
      marginTop: "15px",
      borderTopWidth: "2px",
      borderColor: "#cbd5e1",
      flexDirection: "row",
    },

    email: {
      ...style.email,
      textAlign: style.email.textAlign as any,
    },
    phoneNumber: {
      ...style.phoneNumber,
      textAlign: style.phoneNumber.textAlign as any,
      marginTop: "12px",
    },
    address: {
      ...style.address,
      textAlign: style.address.textAlign as any,
      marginTop: "12px",
    },

    companyName: {
      ...style.companyName,
      textAlign: style.companyName.textAlign as any,
    },

    details: {
      ...style.details,
      textAlign: style.details.textAlign as any,
      borderLeftWidth: "2px",
      paddingLeft: "20px",
      paddingTop: "10px",
      borderColor: "#cbd5e1",
      lineHeight: 1.5,
    },
    text: {
      color: "#71717a",
      fontSize: "18px",
      fontWeight: 400,
      marginTop: "20px",
    },
    name: {
      color: "#262626",
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: "18px",
      textTransform: "uppercase",
      marginTop: "12px",
    },
  });

  return (
    <Document>
      <Page style={styles.container}>
        <Text
          style={{
            ...style.fullName,
            textAlign: style.fullName.textAlign as any,
            lineHeight: 1,
            maxWidth: "180.2px",
            textTransform: "uppercase",
          }}>
          {coverLetter.fullName}
        </Text>

        <Text
          style={{
            ...style.JobTitle,
            textAlign: style.JobTitle.textAlign as any,
            marginTop: "4px",
          }}>
          {coverLetter.JobTitle}
        </Text>

        <View style={styles.body}>
          <View
            style={{
              minWidth: "180px",
              paddingTop: "10px",
              paddingRight: "10px",
            }}>
            {(coverLetter.managerName || coverLetter.companyName) && (
              <Text style={styles.text}>To</Text>
            )}
            <Text
              style={{
                ...style.managerName,
                textAlign: style.managerName.textAlign as any,
                textTransform: "uppercase",
                marginTop: "15px",
              }}>
              {coverLetter.managerName}
            </Text>
            <Text style={styles.companyName}>{coverLetter.companyName}</Text>
            {coverLetter.fullName && (
              <View>
                <Text style={styles.text}>From</Text>
                <Text style={styles.name}>{coverLetter.fullName}</Text>
              </View>
            )}
            <Text style={styles.email}>{coverLetter.email}</Text>
            <Text style={styles.phoneNumber}>{coverLetter.phoneNumber}</Text>
            <Text style={styles.address}>{coverLetter.address}</Text>
          </View>
          {coverLetter.details && (
            <View
              style={{ textOverflow: "ellipsis", flexGrow: 1, width: "100%" }}>
              <Text
                style={{
                  ...style.details,
                  textAlign: style.details.textAlign as any,
                  borderLeftWidth: "2px",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                  borderColor: "#cbd5e1",
                  lineHeight: 1.5,
                }}>
                {coverLetter.details}
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default LondonPDF;
