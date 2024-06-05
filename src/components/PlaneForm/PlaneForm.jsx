function PlaneForm({ handleSubmit, newPlane, setNewPlane }) {

    return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Airline Name'
          value={newPlane}
          onChange={event => setNewPlane(event.target.value)} />
        <button type='submit'>Add Airline</button>
      </form>
    );
  }
  
  export default PlaneForm