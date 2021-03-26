export async function getConversationsDropDownRequest(query) {
    return await fetch(`/api/v1/conversations/dropdown/?search=${query}`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };

export async function getMessagesDropDownRequest(query) {
    return await fetch(`/api/v1/messages/dropdown/?search=${query}`)
    .then(response => response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  };
