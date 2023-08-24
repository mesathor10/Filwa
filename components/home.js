import styled from 'styled-components';
import ImgSlide from './ImageSlider';
import Viewers from './Viewers'
import Recommends from './Recommended';
import NewFilwa from './NewFilwa';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
// import { useRef, useMemo } from 'react';
import { setMovies } from './features/movie/movieSlice';
import { selectUserName } from './features/user/userSlice';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
  
    // const recommends = useRef(useMemo(() => [], []));
    // const originals = useRef(useMemo(() => [], []));
    // const trending = useRef(useMemo(() => [], []));

  useEffect(() => {
    const subscribe = onSnapshot(collection(db, 'movies'), (snapshot) => {
      const Recommends = [];
      const newFilwa = [];
      const Originals = [];
      const Trending = [];

      snapshot.docs.forEach((doc) => {
        const movieData = { id: doc.id, ...doc.data() };

        switch (movieData.type) {
          case 'recommend':
            Recommends.push(movieData);
            break;
          case 'new':
            newFilwa.push(movieData);
            break;
          case 'original':
            Originals.push(movieData);
            break;
          case 'trending':
            Trending.push(movieData);
            break;
          default:
            break;
        }
      });

    //   recommends.current = Recommends;
    //   newFilwas.current = NewFilwas;
    //   originals.current = Originals;
    //   trending.current = Trending;

      // Dispatch the movie data to the Redux store
      dispatch(setMovies({
        recommend: Recommends,
        newFilwa: newFilwa,
        original: Originals,
        trending: Trending,
      }));
    });

    return () => subscribe(); // Cleanup the subscription when the component unmounts
  }, [userName, dispatch]);

    

    return (
        <Container>
            <ImgSlide />
            <Viewers />
            <Recommends />
            <NewFilwa />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
position: relative;
overflow-x: hidden;
padding: calc(3.5uw + 5px);
min-height: calc(100vh - 200px);
top: 72px;
display: block;

    &:after{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home;