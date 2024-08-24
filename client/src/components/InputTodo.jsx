import { Fragment, useState } from "react"


const InputTodo = () => {

    const [description, setDescription] = useState("")

    const onsubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = '/';
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <Fragment>
        <h1 className="text-center mt-5">Pern-Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onsubmitForm}>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button className="btn btn-success " >Add</button>
        </form>
    </Fragment>
   
  )
}

export default InputTodo