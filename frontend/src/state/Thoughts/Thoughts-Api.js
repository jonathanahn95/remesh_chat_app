export async function fetchThoughts(id) {
    return await fetch(`/api/v1/messages/${id}/thoughts`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };


  export async function createThought(data) {
    const rawData = await fetch('/api/v1/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
   
    const content = await rawData.json()
    return content;
  };