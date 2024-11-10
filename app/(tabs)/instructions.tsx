import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const InstructionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Electrolytes Imbalance</Text>

      <Image source={{ uri: 'https://example.com/ecg_device_image.png' }} style={styles.deviceImage} />
      <Text style={styles.instructionText}>Ensure Your ECG Device is Ready.</Text>

      <Image source={{ uri: 'https://example.com/ecg_sensors_placement_image.png' }} style={styles.sensorsImage} />
      <Text style={styles.instructionText}>Place ECG Sensors Correctly.</Text>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionTitle}>Right Arm (RA):</Text>
        <Text style={styles.instructionDetails}>
          Place the electrode on the inside of the right upper arm, just below the shoulder.
        </Text>

        <Text style={styles.instructionTitle}>Left Arm (LA):</Text>
        <Text style={styles.instructionDetails}>
          Place the electrode on the inside of the left upper arm, mirroring the position on the right arm.
        </Text>

        <Text style={styles.instructionTitle}>Right / Left Leg (RL / LL):</Text>
        <Text style={styles.instructionDetails}>
          Place the electrode on the lower part of the right / left leg, just above the ankle.
        </Text>
      </View>

      <Text style={styles.warningText}>Stay Still during Recording.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Check Electrolytes</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Image source={{ uri: 'https://example.com/icon1.png' }} style={styles.icon} />
        <Image source={{ uri: 'https://example.com/icon2.png' }} style={styles.icon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  deviceImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  sensorsImage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  instructionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  instructionDetails: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
  warningText: {
    fontSize: 14,
    color: '#E74C3C',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#E74C3C',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default InstructionsScreen;
