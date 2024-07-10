import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

interface MushroomCardProps {
  name: string;
  imageUrl: string;
  description?: string;
  onPress: () => void; // Function to call when the card is pressed
}

const MushroomCard: React.FC<MushroomCardProps> = ({
  name,
  imageUrl,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Card title={name} containerStyle={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {description && <Text style={styles.description}>{description}</Text>}
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default MushroomCard;
