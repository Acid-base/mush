import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MushroomCard from './MushroomCard';
import { mushroomService } from '../services/mushroom-service'; // Replace with your actual service

const MushroomList: React.FC = () => {
  const navigation = useNavigation();
  const [mushrooms, setMushrooms] = useState([]);

  useEffect(() => {
    const fetchMushrooms = async () => {
      try {
        const data = await mushroomService.getMushrooms();
        setMushrooms(data);
      } catch (error) {
        console.error('Error fetching mushrooms:', error);
      }
    };
    fetchMushrooms();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={mushrooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MushroomCard
            name={item.name}
            imageUrl={item.imageUrl}
            description={item.description}
            onPress={() => navigation.navigate('MushroomDetail', { id: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MushroomList;
