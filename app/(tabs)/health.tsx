import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const HealthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Electrolytes & Health</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={[styles.card, styles.potassium]}>
          <Text style={styles.electrolyteTitle}>Potassium</Text>
          <Text style={styles.description}>
            Potassium is essential for nerve function, muscle contraction, and maintaining a healthy heart rhythm. 
            It also helps regulate fluid balance in the body.
          </Text>
          <Text style={styles.symptoms}><Text style={styles.boldText}>Deficiency Symptoms:</Text> Fatigue, muscle cramps, heart palpitations.</Text>
          <Text style={styles.symptoms}><Text style={styles.boldText}>Excess Symptoms:</Text> Nausea, irregular heartbeat, muscle weakness.</Text>
        </View>

        <View style={[styles.card, styles.calcium]}>
          <Text style={styles.electrolyteTitle}>Calcium</Text>
          <Text style={styles.description}>
            Calcium is crucial for bone health, muscle function, and blood clotting. It also plays a role in heart health and nerve signaling.
          </Text>
          <Text style={styles.symptoms}><Text style={styles.boldText}>Deficiency Symptoms:</Text> Muscle spasms, tingling in fingers, fatigue.</Text>
          <Text style={styles.symptoms}><Text style={styles.boldText}>Excess Symptoms:</Text> Nausea, vomiting, kidney stones.</Text>
        </View>

        <View style={[styles.card, styles.magnesium]}>
          <Text style={styles.electrolyteTitle}>Magnesium</Text>
          <Text style={styles.description}>
            Magnesium supports muscle and nerve function, helps maintain a steady heartbeat, and supports the immune system.
          </Text>
          <Text style={styles.symptoms}><Text style={styles.boldText}>Deficiency Symptoms:</Text> Muscle cramps, fatigue, irritability.</Text>
          <Text style={styles.symptoms}><Text style={styles.boldText}>Excess Symptoms:</Text> Low blood pressure, slowed breathing, irregular heartbeat.</Text>
        </View>
      </ScrollView>
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
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  potassium: {
    backgroundColor: '#d3eedd',
  },
  calcium: {
    backgroundColor: '#f8d7da',
  },
  magnesium: {
    backgroundColor: '#f5f5dc',
  },
  electrolyteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'black',
    marginBottom: 8,
  },
  symptoms: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default HealthScreen;
