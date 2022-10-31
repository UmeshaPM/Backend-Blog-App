import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { store } from "../Pages/StoredData";

var currentData;

const SeparateArticalView = () => {
    const [data] = useContext(store);
    const { id } = useParams();
    currentData = id - 1;
    return (
        <div>
            {
                <div key={data[currentData].id}>
                    <div><h3 className="selectedTitle">{data[currentData].title}</h3></div>
                    <div className='selectedImage'>
                        <img src={data[currentData].image} alt=" " className='selectedImageOne' />
                    </div><br></br>
                    <div className="singlePageContent">
                        <div><p className="selectedDescription">{data[currentData].description}</p></div>
                        <div><p className="selectedCatagory">Category:<span className="category">{data[currentData].category}</span></p></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SeparateArticalView;