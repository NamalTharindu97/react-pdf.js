import React from "react";
import {
  PDFViewer,
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  pageContainer: {
    border: "1px solid black",
    width: "100%",
    height: "600px",
    boxSizing: "border-box",
    padding: "10px",
  },
  page: {
    padding: 5,
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    backgroundColor: "#f2f2f2",
    boxSizing: "border-box",
  },
  image: {
    width: 10,
  },
  title: {
    fontSize: 2,
  },
});

function MyDocument() {
  return (
    <Document>
      <Page size="A8" style={styles.page}>
        <Text style={styles.title}>Hello, World!</Text>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
          style={styles.image}
        />
      </Page>
    </Document>
  );
}

function PDFGenerator() {
  return (
    <PDFViewer
      width="100%"
      height="600"
      scale="100%"
      style={{
        border: "none",
        boxShadow: "none",
        overflow: "auto",
      }}
    >
      <MyDocument />
    </PDFViewer>
  );
}

export default PDFGenerator;
