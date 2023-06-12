import {Link} from "react-router-dom"

function PuppyList(props){
    // console.log(props)
    return(
        <div id="puppylist">
             <h2>This is the Puppy List:</h2>
        {
            props.puppies.length ? props.puppies.map((singlePuppy) => {
                return (
                    <div key={singlePuppy.id}>
                        <p>Name: {singlePuppy.name}</p>

                    <Link to={`/puppies/${singlePuppy.id}`}>See Details About {singlePuppy.name}</Link>
                    
                    </div>
                )
            }): <p>Loading...</p>
        }
     </div>
       
    )
    
}
export default PuppyList;