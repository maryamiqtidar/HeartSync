import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const ElectrolytesImbalanceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Electrolytes Imbalance</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, styles.normal]}>
        <Text style={styles.levelType}>Potassium Levels</Text>
        <Text style={styles.levelStatusNormal}>Normal</Text>
      </View>

      <View style={[styles.card, styles.low]}>
        <Text style={styles.levelType}>Calcium Levels</Text>
        <Text style={styles.levelStatusLow}>Low</Text>
      </View>

      <View style={[styles.card, styles.high]}>
        <Text style={styles.levelType}>Magnesium Levels</Text>
        <Text style={styles.levelStatusHigh}>High</Text>
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
  card: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
  },
  normal: {
    backgroundColor: '#d3eedd',
  },
  low: {
    backgroundColor: '#f5f5dc',
  },
  high: {
    backgroundColor: '#f8d7da',
  },
  levelType: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  levelStatusNormal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  levelStatusLow: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b0a217',
  },
  levelStatusHigh: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d9534f',
  },
});

export default ElectrolytesImbalanceScreen;
