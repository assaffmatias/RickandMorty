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
                    <button className={style.button}>
                        <svg className={style.svgIcon} viewBox="0 0 384 512">
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                            ></path>
                        </svg>
                    </button>
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