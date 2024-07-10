import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { mushroomService } from '../services/mushroom-service'; // Replace with your actual service

interface MushroomDetailProps {
  id: string;
}

const MushroomDetail: React.FC<MushroomDetailProps> = ({ id }) => {
  const [mushroom, setMushroom] = useState(null);

  useEffect(() => {
    const fetchMushroom = async () => {
      try {
        const data = await mushroomService.getMushroomById(id);
        setMushroom(data);
      } catch (error) {
        console.error('Error fetching mushroom:', error);
      }
    };
    fetchMushroom();
  }, [id]);

  if (!mushroom) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: mushroom.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mushroom.name}</Text>
      <Text style={styles.description}>{mushroom.description}</Text>
      {/* Add other details you want to display */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default MushroomDetail;
