import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import place from './assets/images/place.svg'
import axios from 'axios'
import styled from 'styled-components'
import {Helmet} from "react-helmet";




const List = () => {

  const [places,setPlaces] = useState([]);
  useEffect(()=>{
    axios
        .get("https://traveller.talrop.works/api/v1/places/")
        .then(function(response){
            setPlaces(response.data.data);
            })
        .catch(function(error){console.log(error);})
  },[]); 
  return (
    <>
        <Helmet>
            <title>place</title>
        </Helmet>
        <Listpage>
            <Heading>Welcome</Heading>
            <Subheading>Explore the World around you</Subheading>
            <Placesin>
                {places.map((item)=>(
                    <Placelist  key={item.id}>
                        <Placelistlink href={`${item.id}`}>
                            <Placeimgmain src={item.image} alt={`${item.name}`}/>
                            <Placename>{item.name}</Placename>
                            <Placelocation>
                                <Locationimg src={place} alt='location' />
                                <Placenamesub>{item.location}</Placenamesub>
                            </Placelocation>
                        </Placelistlink>
                    </Placelist>

                ))}
            </Placesin>
        </Listpage>
    </>
  )
}

export default List

const Listpage=styled.div`
    background-color: #fff;
    width: 100%;
    padding: 5vh 5%;
`;
    const Heading=styled.h1`
        font-size: 2.5em;
        margin: 1em 0%;
        color: black;
    `;
    const Subheading=styled.p`
        font-size: 1.5em;
        margin: 1em 0%;
        color: rgb(120, 121, 122);
    `;
    const Placesin=styled.ul`
        margin: 0px 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    `;
        const Placelist=styled.li`
            width: 22%;
            margin: 1em 0em ;
        `;
            const Placelistlink=styled.a`

            `;
                const Placeimgmain=styled.img`
                    width: 100%;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                `;
                const Placename=styled.p`
                    margin: 0em 0.5em 0.2em 0.5em;
                    font-weight: 600;
                `;
                const Placelocation=styled.section`
                    display: flex;
                    margin: 0.2em 0.5em ;
                `;
                    const Locationimg=styled.img`
                        margin: auto 2% auto 0%;
                        width: 1.2em;
                        height: 1.2em;
                    `;
                    const Placenamesub=styled.p``;
