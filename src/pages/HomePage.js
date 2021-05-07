import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { postActions } from "../redux/actions";


// 1. Dispatch an action which requests to an api for our posts data when our homepage loads.
// 2. We defined the types of actions that can occur related to our posts.
// 3. Define a post actions file & function, getPosts().
// 3. Inside getPosts() we dispatch an action which tells our user we're processing the API request
// 4. Perform API request to get our posts.
    // a) We're successful.
    // b) We fail.
// 5. Update posts state depending on what happens with our API request
// 6. We update our homepage UI depending on what has happened with our request.

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, error, posts } = useSelector(
    (reduxStoreState) => reduxStoreState.post,
  );

  useEffect(() => {
    dispatch(postActions.getPosts());
  }, [dispatch]);

  if (loading) return <h1>Loading!</h1>;

  if (error) return <h1>Whoops, we have an error</h1>;
  
  return (
    <div>
      <h1>HomePage</h1>
      {posts.map((p) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{p.body}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export { HomePage };
