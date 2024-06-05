import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import PlaneForm from '../PlaneForm/PlaneForm';
import PlaneTable from '../PlaneTable/PlaneTable';

function App() {

  const [newPlane, setNewPlane] = useState("")

  const planeList = useSelector(store => store.planeList);

  const dispatch = useDispatch();

  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_PLANE",
      payload: newPlane,
    })

    setNewPlane("");
  };


  return (
    <div>
      <h1>Redux Airport</h1>
        <PlaneForm handleSubmit={handleSubmit} newPlane={newPlane} setNewPlane={setNewPlane}/>
        <PlaneTable planeList={planeList}/>

    </div>
  );
}

export default App;
