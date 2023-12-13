import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Favorites = (props) => {
    const { myFavorites } = props;
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        const value = event.target.value;
        dispatch(orderCards(value))
        setAux(!aux);
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        if (value === "All") {
            dispatch(filterCards(null))
        } else {
            dispatch(filterCards(value))
        }
    };

    return (
        <div className={style.container}>
            <div className={style.selectContainer}>
                <Link to='/characters'>
                    <button className={style.button}> Go Back</button>
                </Link>
                <div>
                    <select className={style.select} onChange={handleOrder}>
                        <option value="A">Upward</option>
                        <option value="D">Falling</option>
                    </select>
                    <select className={style.select} onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>
            {myFavorites.map((char) => {
                return (
                    <div className={style.card}>
                        <Card
                            key={char.id}
                            id={char.id}
                            image={char.image}
                            name={char.name}
                        />
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);
