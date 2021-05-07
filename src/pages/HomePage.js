import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActions } from '../redux/actions'
import { Card, Button } from 'react-bootstrap'

const HomePage = () => {
    const dispatch = useDispatch()
    const { loading, error, posts } = useSelector(reduxStoreState => reduxStoreState.post)


    useEffect(() => {
        dispatch(postActions.getPosts())
    }, [dispatch])


    if (loading) return <h1>Loading!!</h1>
    if (error) return <h1>Error</h1>
    return (
        <div>
            <h1>HomePage</h1>
            {posts.map(p => {
                return (
                    <Card className="mt-5">
                        {p.photos?.map(i => {
                            return (
                                <Card.Img variant="top" src={i.url} />
                            )
                        })}
                        <Card.Body>
                            <Card.Title>{p.body}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Text>{p.createdAt}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export { HomePage }
