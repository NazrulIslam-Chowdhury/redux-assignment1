import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import loadContentData from '../../Redux/Thunk/Contents/FetchContents';

const Home = () => {
    const contents = useSelector((state) => state.contents)
    console.log(contents);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContentData())
    }, [dispatch])

    return (
        <Carousel>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Home;