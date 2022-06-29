export const state = () => ({
  noteCards: []
})

export const mutations = {
  setNoteCards (state, noteCards) {
    state.noteCards = noteCards
  },
  addNoteCard (state, card) {
    const newCard = { id: card.id, title: card.title, topic: card.topic, notes: card.notes }
    state.noteCards.push(newCard)
  },
  editNoteCard (state, edit) {
    const card = state.noteCards.find(card => card.id === edit.id)
    card.title = edit.title
    card.topic = edit.topic
    card.notes = edit.notes
  }
}

export const getters = {
  getNoteCards: state => state.noteCards,
  getNoteCard: state => id => state.noteCards.find(card => card.id === id)
}
