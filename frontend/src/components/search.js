import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = (props) => {
    const [selectTitle, setSelectTitle] = useState("");
    const [reviewList, setReviewList] = useState([]);

    const postTarget = `http://localhost:5555/api`;

    // when title change auto send post to backend
    useEffect(() => {
        if (selectTitle != "") {

            submitReview();
        } else {
            setReviewList([])
        }
    }, [selectTitle]);

    useEffect(
        (e) => {
            console.log(reviewList);
        },
        [reviewList]
    );
    const submitReview = () => {
        var bodyData = {
            selectTitle: selectTitle,
        };

        axios.post(postTarget, bodyData)
            .then((response) => {
                //200 for success
                if (response.status === 200) {
                    // when success set result
                    var processed = [];

                    response.data.map(el => {
                        console.log(el)
                        processed.push(el);
                    })


                    setReviewList(processed);
                } else {
                    alert("Backend error => backend return is not 200");
                }
            })
            .catch((error) => {
                alert("Backend error=> post send but no resp");
            });
    };

    return (
        <div className="search-container">
            
            <h1 className="Header">Search</h1>
            <form
                onSubmit={(e) => {
                    //stop page reflash on submit
                    e.preventDefault();

                    //triger submit logic
                    submitReview();
                }}
            >
                <label htmlFor="Title">Title</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    onBlur={(e) => {
                        setSelectTitle(e.target.value);
                    }}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            
            {reviewList.map((el, i) => {
                return <div key={`display ${i}`}>
        
                    {Object.keys(el).map(k => {
                        return <p key={`display ${i} ${k}`}>{k}: {el[k]}</p>

                    })}

                </div>

            })}
        </div>
    );
};

export default Search;