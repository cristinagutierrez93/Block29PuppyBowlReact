import{useState} from 'react'

function PuppySearchBar ({puppies, setAllPuppies}){
const [searchQuery, setSearchQuery]= useState("")

let filteredPuppy=puppies.filter((singlePuppy) =>{
    let lowercasedName=singlePuppy.name.toLowerCase();
    let lowercasedQuery= searchQuery.toLowerCase()

    if (lowercasedName.includes(lowercasedQuery)) {
        return singlePuppy
    }
  })

  return(
    <div id="searchbar-container">
    <form>
      <label htmlFor="search-query">Search Puppy Name Here:</label>

        <input
          name="search-query"
          type="text"
          placeholder="type here"
          value={searchQuery}
          onChange={(event) => {
              console.log(event.target.value)
              setSearchQuery(event.target.value)
          }}
          ></input>
    </form>

    {
      filteredPuppy.length ? filteredPuppy.map((singlePuppy, idx) =>{
        return(
          <div key={idx}>
            <h2>Name: {singlePuppy.name}</h2>
            <p>ID #: {singlePuppy.id}</p>
          </div>
        )
      }): <p>Loading...</p>
    }
  </div>
  )
}

export default PuppySearchBar

