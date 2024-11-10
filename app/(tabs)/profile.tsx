import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/heartbeat.png')}
        style={styles.ecgImage}
      />
      <Text style={styles.title}>Electrolytes Imbalance</Text>
      <Text style={styles.subtitle}>Detect Imbalances</Text>

      <Text style={styles.sectionTitle}>Details</Text>
      <Text style={styles.detailsText}>
        HeartSync provides the detection of electrolyte imbalances through ECG data analysis. Stay informed about your
        potassium, calcium, and magnesium levels for optimal health.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get details</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Image source={{ uri: 'https://example.com/icon1.png' }} style={styles.icon} />
        <Image source={{ uri: 'https://example.com/icon2.png' }} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  ecgImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    textAlign: 'justify',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#E74C3C',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    marginTop: 30,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
