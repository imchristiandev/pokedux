import React, { useEffect } from 'react'
import { getPokemons } from './api'
import { Col, Spin } from 'antd'
import { Searcher } from "./components/Searcher"
import { PokemonList } from './components/PokemonList'
import logo from './assets/logo.svg'
import { getPokemonsWithDetails, setLoading } from './actions'
import './App.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

function App() {
  const pokemons = useSelector( state => state.getIn(['data', 'pokemons'], shallowEqual) ).toJS()
  const loading = useSelector( state => state.getIn(['ui', 'loading']) )
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonList = await getPokemons()
      dispatch(getPokemonsWithDetails(pokemonList))
      dispatch(setLoading(false))
    }
    fetchPokemons()
  }, [])
  
  return (
    <>
      <div className='App'>
        <Col span={4} offset={10}>
          <img src={logo} alt='Pokemon' />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        { loading ? 
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col> :
          <PokemonList pokemons={pokemons}/>
        }
      </div>
    </>
  )
}



export default App
