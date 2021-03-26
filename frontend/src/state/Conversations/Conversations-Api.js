export async function fetchConversation(id) {
  return await fetch(`/api/v1/conversations/${id}`)
  .then(response => response.json())
  .catch((error) => {
    console.error('Error:', error)
  })
};

export async function getConversationsRequest() {
  return await fetch('/api/v1/conversations')
  .then(response => response.json())
  .catch((error) => {
    console.error('Error:', error)
  })
};

export async function createConversation(data) {
  const rawData = await fetch('/api/v1/conversations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
 
  const content = await rawData.json()
  return content;
};
