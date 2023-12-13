import React from "react";
import style from "./Detail.module.css"
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes"

const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div className={style.container}>
            <div className={style.divButton}>
                <Link to={PATHROUTES.CHARACTERS}>
                    <button className={style.button}> Go Back</button>
                </Link>
            </div>
            <div className={style.container2}>
                <div className={style.Divimg}>
                    <img className={style.img} src={character?.image} alt={character?.name} />
                </div>
                <div className={style.info}>
                    <h2 className={style.h2}>{character?.name}</h2>
                    <h3 className={style.h3}>STATUS ☛ {character?.status}</h3>
                    <h3 className={style.h3}>GENDER ☛ {character?.gender}</h3>
                    <h3 className={style.h3}>SPECIE ☛ {character?.species}</h3>
                    <h3 className={style.h3}>ORIGIN ☛ {character.origin?.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail;