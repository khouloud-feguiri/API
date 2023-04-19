import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Usercard = (user) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
{user.email}
      </Card.Text>
      <Button variant="primary"></Button>
      <Link to={'/profile/'}profile/>
    </Card.Body>
  </Card></div>
  )
}

export default Usercard