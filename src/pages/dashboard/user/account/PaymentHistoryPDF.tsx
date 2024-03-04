/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, View, Document, Text, Image } from "@react-pdf/renderer";

export interface IPaymentHistory {
  history: {
    name: string;
    email: string;
    plan: string;
    price: string;
    transactionId: string;
    purchase: string;
    expiration: string;
    timeLimit: number;
    downloadPoint: number;
  };
}
const PaymentHistoryPDF: React.FC<IPaymentHistory> = ({ history }) => {
  return (
    <Document>
      <Page style={{ padding: "40px", color: "#263238", fontSize: "14px" }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}>
          <Image
            style={{ width: "200px" }}
            src="https://i.ibb.co/fpC1dm6/Screenshot-12.png"
          />
        </View>

        <View style={{ marginVertical: "20px" }}>
          <Text>{history.name}</Text>
          <Text>{history.email}</Text>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Plan
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            {history.plan}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Price
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            ${history.price}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Transaction Id
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            {history.transactionId}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Download Point
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            {history.downloadPoint}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Time Limit
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            {history.timeLimit} day
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Expiration
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            {history.expiration}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            alignContent: "center",
            flexDirection: "row",
            marginTop: "10px",
          }}>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#1876f2",
              padding: "5px",
              width: "100%",
              color: "white",
            }}>
            Purchase
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              backgroundColor: "#f0f4fa",
              padding: "5px",
              width: "100%",
              textAlign: "right",
            }}>
            {history.purchase}
          </Text>
        </View>
        <Image
          style={{ width: "200px", marginTop: "50px" }}
          src="https://i.ibb.co/ZJCRRh6/signature.png"
        />
      </Page>
    </Document>
  );
};

export default PaymentHistoryPDF;
