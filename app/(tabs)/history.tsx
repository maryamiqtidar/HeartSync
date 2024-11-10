import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const HistoryScreen = () => {
  // Sample data for history records
  const historyData = [
    { date: '23/10/2024', time: '11:39', potassium: 'Normal', calcium: 'High', magnesium: 'Low' },
    { date: '23/10/2024', time: '22:21', potassium: 'High', calcium: 'High', magnesium: 'Normal' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>History</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Time</Text>
          <Text style={styles.tableHeaderText}>K+</Text>
          <Text style={styles.tableHeaderText}>Ca+</Text>
          <Text style={styles.tableHeaderText}>Mg</Text>
        </View>

        <ScrollView>
          {historyData.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.date}</Text>
              <Text style={styles.tableCell}>{item.time}</Text>
              <Text style={[styles.tableCell, item.potassium === 'Normal' ? styles.normal : styles.high]}>
                {item.potassium}
              </Text>
              <Text style={[styles.tableCell, item.calcium === 'Normal' ? styles.normal : styles.high]}>
                {item.calcium}
              </Text>
              <Text style={[styles.tableCell, item.magnesium === 'Normal' ? styles.normal : styles.low]}>
                {item.magnesium}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text>📊</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>🔄</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  menuButton: {
    fontSize: 24,
    color: 'black',
  },
  tableContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    fontSize: 14,
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },
  normal: {
    color: 'green',
  },
  low: {
    color: '#b0a217',
  },
  high: {
    color: '#d9534f',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HistoryScreen;
