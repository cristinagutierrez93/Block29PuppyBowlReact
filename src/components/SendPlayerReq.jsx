// import {Link} from "react-router-dom"

// async function SendPlayerReq (event){
//     event.preventDefault();
//     try{
//       const response= await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           title: newPuppyName,
//           userId: 1
//         })

//       })

//       const translatedData=await response.json();
//       console.log(translatedData)

//       let newPuppyObj={
//         name: translatedData.name
//       };

//       setPuppyData([...puppies,newPuppyObj])
//     }catch (error) {
//       console.log(error)
//     }
    
//   }

//     <form
//         onSubmit={sendPlayerReq}
//     >
//         <label htmlFor="name">New Player Name:</label>
//         <input
//             name="name"
//             type="text"
//             placeholder="Puppy Bowl Player Name"
//             value={newPuppyName}
//             onChange={(event) =>{
//                 setNewPuppyName (event.target.value)
//             }}
//     >
//         </input>

//         <button type="submit">Create New Puppy</button>
//     </form>

//     </>
//     )
//           }

//     export default SendPlayerReq
