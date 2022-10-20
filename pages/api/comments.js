// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/** Any file inside folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page */

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req, res) {
  const { name, email, comment, slug } = req.body;

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      comment,
      slug,
    });
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
