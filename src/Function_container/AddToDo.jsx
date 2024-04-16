function AddToDo({items,handelcare}){

    return (
      <>   
        <form method="POST" >
          <input type="text" onChange={handelcare()} />
          <button type="submit"></button>
        </form>
      </>

    )
}

export default AddToDo;