export async function createMessage(data) {
    const rawData = await fetch('/api/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
   
    const content = await rawData.json()
    return content;
  };

export async function fetchMessages(id) {
    return await fetch(`/api/v1/conversations/${id}/messages`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };


 

export async function fetchMessage(id) {
    return await fetch(`/api/v1/messages/${id}`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };


 