import React from 'react'
import { useDispatch } from 'react-redux'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { StarButton } from '../StarButton'
import { setFavorite } from '../../slices/dataSlice'

export const PokemonCard = ({name, image, types, id, favorite}) => {
  const pokemonTypes = types.map(({ type }) => type.name).join(', ')
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }
  return <Card
    title={name}
    cover={ <img src={image} alt={name} /> }
    extra={ <StarButton isFavorite={favorite} onClick={handleOnFavorite} /> }
  >
    <Meta description={pokemonTypes} />
  </Card> 
}