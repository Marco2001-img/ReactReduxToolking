import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PokemonList() {
    const [pokemonData, setpokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPokemon = async ()=>{
            try{
                const promises = []
                for(let i = 1; i<10; i++)
                {
                    promises.push(axios.get(` https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/${i}`))
                }

                const results = await Promise.all(promises)
                const pokemons = results.map(response => ({
                    name: response.data.name,
                   // image: response.data.sprites.front_default,
                    description: response.data.flavor_text_entries.find(entry => entry.language.name === 'es')?.flavor_text || 'No description available.'
                }))

                setpokemonData(pokemons)

            }catch(error){
                setError(error)
            } finally{
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [])

    if(loading) return <p>Cargando</p>
    if(error) return <p>Error {error.message}</p>
  return (
    <>
      {pokemonData.map((pokemon,index) =>(
        <div key={index} className=''>
            <h1>{pokemon.name}</h1>
            <img src="{pokemon.image}" alt="img" />
            <p>{pokemon.description}</p>
        </div>
      ))}
    </>
  )
}
