import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
// import { firestore } from '../../firebase/firebase.utils';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   console.log('a am subscribing');
  //   const unsubscribeFromCollections = firestore
  //     .collection('collection')
  //     .onSnapshot(snapshot => console.log(snapshot));

  //   return () => {
  //     console.log('i am unsubscribing');
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
