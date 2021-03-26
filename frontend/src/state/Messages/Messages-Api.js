export async function getAllMessagesForConversation(id) {
    return await fetch(`/api/v1/conversations/${id}/messages`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };

export async function getSingleMessage(id) {
    return await fetch(`/api/v1/messages/${id}`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };


 