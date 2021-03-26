Conversation.destroy_all
Message.destroy_all
Thought.destroy_all

Conversation.create!([
  {title: 'General'},
  {title: 'Random'},
  ])

conversations = Conversation.all

Message.create!([
  {conversation_id: conversations[0].id, text: 'Hello!'},
  {conversation_id: conversations[0].id, text: 'Hi there!'},
  {conversation_id: conversations[0].id, text: 'I am taking a take home assignment from Remesh'},
  {conversation_id: conversations[0].id, text: 'advice on what to study?'},
  {conversation_id: conversations[0].id, text: 'Oh wow that is great stuff!'},
  {conversation_id: conversations[0].id, text: 'I know right :)'},
  {conversation_id: conversations[0].id, text: 'well, good luck!'},
])

messages = Message.all

Thought.create!([
  {message_id: messages[3].id, text: 'Data Structures'},
  {message_id: messages[3].id, text: 'algossssss'},
  {message_id: messages[3].id, text: 'system design'},
  {message_id: messages[3].id, text: 'its language agnostic'},
])
