const userTypeDef = `#grapghql
type User{
    _id: ID!
    username: String!
    password: String!
    profilePicture: String
    gender: String!
}

type Query{
    users:[User!]
    authUser:User
    user(userId:ID!):User
}

type Mutation{
    signUp(input: SignUpInput!):User
    login(input:LoginInput!):User
    logout(input:LogoutInput!):User
}

input SignUpInput{
    username: String!
    password: String!
    profilePicture: String
    gender: String!
}

input LoginInput{
    username: String!
    password: String!
}
input LogoutInput{
    message: String!
}
`;


export default userTypeDef; 