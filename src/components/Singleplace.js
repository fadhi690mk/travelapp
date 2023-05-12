import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import place from './assets/images/place.svg'
import axios from 'axios'
import styled from 'styled-components'
import {Helmet} from "react-helmet";

const Singleplace = () => {
  const {pass}= useParams()
  const [places,setPlaces] = useState({
    gallery:[],
});
  useEffect(()=>{
    axios
        .get(`https://traveller.talrop.works/api/v1/places/view/${pass}`)
        .then(function(response){
            setPlaces(response.data.data);
            console.log(response.data.data);

            
            
             })
        .catch(function(error){console.log(error);})
        axios
        .get(`https://traveller.talrop.works/api/v1/blog/article/2`)
        .then(function(response){
            
            console.log(response.data.data);
            
             })
        .catch(function(error){console.log(error);})
        axios
        .get(`https://traveller.talrop.works/api/v1/blog/`)
        .then(function(response){
            
            console.log(response.data.data);
            
             })
        .catch(function(error){console.log(error);})
  },[]);
  return (
    <>
        <Helmet>
            <title>{places.name}</title>
        </Helmet>  
        <Singlepage>
            <Placename>
                {places.name}
            </Placename>
            <Subheading>
                <Placetype>{places.category_name}</Placetype>
                <Placelocation>
                    <Locationimg src='https://traveller.talrop.works/media/authors/img_avatar.png' onError={(e)=>{
                        e.target.onerror=null;
                        e.target.src=`${place}`;
                    }} alt='location' />
                    <Placenamesub>{places.location}</Placenamesub>
                </Placelocation>
            </Subheading>
            <Galleryframe>
                <Mainimg src={places.image}  alt='main-img'/>
                <Gallery >
                {places.gallery.map((item)=>(
                        <Galleryli>
                            <Galleryimg src={item.image} alt='image'   />     
                        </Galleryli>
                ))}
                </Gallery> 
            </Galleryframe>
            <Details>Place Details</Details>
            <Content>{places.description}</Content>
        </Singlepage>
    </>
  )
}

export default Singleplace

const Singlepage=styled.div`
background-color: #fff;
width: 100%;
padding: 5vh 15%;
`;
    const Placename=styled.h1`
    font-size: 3em;
    margin: 0.5em 0%;
    color: black;
    font-weight: bolder;
    `;
    const Subheading=styled.section`
    display: flex;
    margin-bottom:0.5em;
    `;
        const Placetype=styled.p`
        border: 2px solid grey;
        padding: 0em 0.5em;
        border-radius: 25px;
        display: inline;
        color: gray;
        font-size: 20px;
        `;
        const Placelocation=styled.section`
        display: flex;
        margin: 0.2em 0.5em ;
        width:20em;
        `;
            const Locationimg=styled.img`
            margin: auto 2% auto 0%;
            width: 1.2em;
            height: 1.2em;
            `;
            const Placenamesub=styled.p`
            color: gray;
            font-size: 20px;
            font-weight: 500;
            `;
    const Galleryframe=styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    `;
        const Mainimg=styled.img`
        width: 49%;
        border-top-left-radius: 10px;
        transition: transform 0.1s ease-in-out;
        &:hover {transform: scale(1.8)}
        `;
        const Gallery=styled.ul`
        display: flex;
        flex-wrap: wrap;
        width: 49%;
        justify-content: space-between;
        `;
            const Galleryli=styled.li`
            width: 49%;
            &:nth-child(2) img{
                border-top-right-radius: 10px;
            }
            &:last-child img{
                border-bottom-right-radius: 10px;
            }
            `;
                const Galleryimg=styled.img`
                width: 100%;
                `;
    const Details=styled.h3`
    font-size: 1.8em;
    margin: 0.5em 0em;   
    `;
    const Content=styled.p`
    
    `;             