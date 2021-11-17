import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../actions'
import debounce from 'lodash/debounce'
import Card from 'react-bootstrap/Card'

const Search = ({ getBooks, query }) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  const debouncedGetBooks = debounce(query => {
    getBooks(query);
  }, 700);

  const onInputChange = e => {
    debouncedGetBooks(e.target.value)
  }

  return (
    <><Card>
      <Card.Body>
        <Card.Title>Looking for your next favourite read? You've come to the right place.</Card.Title>
        <Card.Subtitle>Our Bookfinder will assist you in finding the best children's books, including magical mysteries, incredible adventures, and amazing facts. Simply select an age group, as many themes as you'd like to search through thousands of book reviews, and start reading. Enjoy! </Card.Subtitle>
      </Card.Body>
    </Card><div className="search-books">


        <Form className="search-books--form" onSubmit={handleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" onChange={onInputChange} placeholder="Harry Potter, Food and Love" />
            <Form.Text className="text-muted">
              Discover your next favourite book with the E-library index.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Go!
          </Button>
        </Form>
      </div></>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.books.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBooks
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);