
export default `
  type Mentor {
    name: String
    email: String
    lessons: [Lesson]
  }

  type Query {
    mentors: [Mentor]
    mentor(id: ID!): Mentor
  }
`;
