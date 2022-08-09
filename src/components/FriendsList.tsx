import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Friend } from './Friend';

interface ItemProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[]
}

export function FriendsList({ data }: ItemProps) {
  // const totalLikes = data.reduce((likes, friend) => likes + friend.likes, 0);
  // Por mais que o cálculo não é um calculo complexo, pela quantidade de dados ele acaba se tornando mais pesado e gerando lentidão.

  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => likes + friend.likes, 0);
  }, [data])
  // O useMemo memoriza um valor
  // Nesse caso, o totalLikes é calculado somente quando o data mudar.

  // Ele é indicado caso um cálculo seja pesado e/ou possa repetir muitas vezes com o mesmo valor.

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>
      {data.map(friend => (
        <Friend key={String(friend.id)} data={friend} />
      ))}
    </View>
  );
}
