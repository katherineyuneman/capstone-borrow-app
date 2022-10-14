import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GeneralStyle } from './styled-components/styleIndex'
import { fetchUser } from './userSlice'

const Home = () => {

    const user = useSelector((state) => state.user);
    const loggedIn = useSelector((state) => state.loggedIn)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
        console.log("hello from dispatch")
      }, [dispatch]);

console.log("user after fetching user:", user)

  return (
    <GeneralStyle>
    <div>
    </div>
    </GeneralStyle>
  )
}

export default Home
