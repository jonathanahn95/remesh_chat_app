export async function querySearchResults(query) {
    return await fetch(`/api/v1/conversations/search/?search=${query}`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };

export async function getDropDownRequest(query) {
    return await fetch(`/api/v1/conversations/dropdown/?search=${query}`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };
