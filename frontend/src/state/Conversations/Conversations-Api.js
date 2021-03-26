export async function getSingleConversation(id) {
  return await fetch(`/api/v1/conversations/${id}`)
  .then(response => response.json())
  .catch((error) => {
    error.json()
  })
};

export async function getAllConversations() {
  return await fetch('/api/v1/conversations')
  .then(response => response.json())
  .catch((error) => {
    error.json()
  })
};
