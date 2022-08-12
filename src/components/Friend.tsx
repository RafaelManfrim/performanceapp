import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ItemProps {
  data: {
    id: number;
    name: string;
    likes: number;
  },
  follow: () => void
}

function FriendComponent({ data, follow }: ItemProps) {
  return (
    <View>
      <Text>{data.name} - Likes: {data.likes}</Text>
      <TouchableOpacity onPress={follow}>
        <Text>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

// O componente friend só é renderizado se os novos props forem diferentes dos anteriores
export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
})

// Um bom critério para usar o memo é usar em componentes puros, onde apenas são exibidos dados e não são manipulados.
// Componentes muito grandes ou que renderizam muitas vezes também são bons candidatos ao memo