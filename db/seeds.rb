Conversation.destroy_all
Message.destroy_all
Thought.destroy_all

Conversation.create!([
  {title: 'General'},
  {title: 'Random'},
  {title: 'Support'}
  ])

conversations = Conversation.all

Message.create!([
  {conversation_id: conversations[0].id, text: 'Hello!'},
  {conversation_id: conversations[0].id, text: 'Hi there!'},
  {conversation_id: conversations[0].id, text: 'I am taking a take home assignment from Remesh'},
  {conversation_id: conversations[0].id, text: 'advice on what to study?'},
  {conversation_id: conversations[0].id, text: 'Oh wow that is great stuff!'},
  {conversation_id: conversations[0].id, text: 'I know right :)'},
  {conversation_id: conversations[1].id, text: 'Seed Message 1'},
  {conversation_id: conversations[1].id, text: 'Seed Message 2'},
  {conversation_id: conversations[1].id, text: 'Seed Message 3'},
])

messages = Message.all

Thought.create!([
  {message_id: messages[1].id, text: 'Hello back to you sir'},
  {message_id: messages[0].id, text: 'Data Structures'},
  {message_id: messages[3].id, text: 'Basketball is amazing'},
  {message_id: messages[2].id, text: 'Data Structures'},
  {message_id: messages[2].id, text: 'Seed thought 1'},
  {message_id: messages[2].id, text: 'Seed thought 2'},
  {message_id: messages[2].id, text: 'Seed thought 3'},
  {message_id: messages[2].id, text: 'Seed thought 4'},
  {message_id: messages[2].id, text: 'Seed thought 5'},
  {message_id: messages[2].id, text: 'Seed thought 6'},
  {message_id: messages[5].id, text: 'Seed thought 7'},
  {message_id: messages[5].id, text: 'Seed thought 8'},
  {message_id: messages[6].id, text: 'algossssss'},
  {message_id: messages[5].id, text: 'system design'},
  {message_id: messages[6].id, text: 'its language agnostic'},
])
