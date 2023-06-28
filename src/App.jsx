import React, { useEffect } from 'react'
import { Col, Spin } from 'antd'
import { Searcher } from "./components/Searcher"
import { PokemonList } from './components/PokemonList'
import logo from './assets/logo.svg'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchPokemonWithDetails } from './slices/dataSlice'
import './App.css'

function App() {
  const pokemons = useSelector( state => state.data.pokemons, shallowEqual )
  const loading = useSelector( state => state.ui.loading )
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPokemonWithDetails())
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
