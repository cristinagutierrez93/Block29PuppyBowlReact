import {useParams} from "react-router-dom"

function DetailedPup (props){
    const {id}= useParams();

    const puppies= props.puppies

    const specificPup= puppies.filter((singlePuppy) =>{
        if(singlePuppy.id ==Number (id)){
            return singlePuppy
        }
    })

    console.log(specificPup)

    return (
        <div>
            <h2>Here you can learn about your specifc pup!</h2>

            <p>Name: {specificPup[0].name}</p>
            <p>ID #: {specificPup[0].id}</p>
            <p>Breed: {specificPup [0].breed}</p>
            <p>Status: {specificPup [0].status}</p>
            <img src={specificPup [0].imageUrl}/>
            
               

        </div>
    )
}

export default DetailedPup
