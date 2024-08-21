import gql from 'graphql-tag';

const DeleteListingMutation = gql`
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

export default DeleteListingMutation;
