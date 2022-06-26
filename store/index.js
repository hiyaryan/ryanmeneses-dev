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
  }
}

export const getters = {
  getNoteCards: state => state.noteCards
}
