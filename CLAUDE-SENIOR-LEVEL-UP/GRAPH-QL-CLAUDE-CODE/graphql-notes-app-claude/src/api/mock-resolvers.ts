import { gql } from '@apollo/client';
import type { Note } from '../types/note.types';

// In-memory data store (симулира database)
let notesData: Note[] = [
  {
    id: '1',
    title: 'GraphQL Basics',
    content:
      'GraphQL е query language за APIs. Позволява на client-a да изисква точно данните които му трябват.',
    createdAt: new Date('2025-01-10').toISOString(),
    updatedAt: new Date('2025-01-10').toISOString(),
  },
  {
    id: '2',
    title: 'React Hooks',
    content: 'useState, useEffect, useContext са основните hooks в React.',
    createdAt: new Date('2025-01-11').toISOString(),
    updatedAt: new Date('2025-01-11').toISOString(),
  },
  {
    id: '3',
    title: 'TypeScript Tips',
    content: 'Винаги използвай strict mode и type safety.',
    createdAt: new Date('2025-01-12').toISOString(),
    updatedAt: new Date('2025-01-12').toISOString(),
  },
];

// GraphQL Type Definitions
export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    notes: [Note!]!
    note(id: ID!): Note
  }

  input CreateNoteInput {
    title: String!
    content: String!
  }

  input UpdateNoteInput {
    title: String
    content: String
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note!
    update(id: ID!, input: UpdateNoteInput!): Note
    deleteNote(id: ID!): Note
  }
`;
