

function PlaneTable({ planeList }) {

    return (

        <table>
          {planeList.map(plane => <li key={plane}>{plane}</li>)}
        </table>
    )
}

export default PlaneTable