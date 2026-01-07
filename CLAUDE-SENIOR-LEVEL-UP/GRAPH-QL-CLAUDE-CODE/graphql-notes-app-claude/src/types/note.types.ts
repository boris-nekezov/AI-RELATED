export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteInput {
  title: string;
  content: string;
}

export interface UpdateNoteInput {
  title?: string;
  content?: string;
}

export interface NoteData {
  note: Note | null;
}

export interface CreateNoteData {
  createNote: Note;
}

export interface UpdateNoteData {
  updateNote: Note | null;
}

export interface DeleteNoteData {
  deleteNote: Note | null;
}
