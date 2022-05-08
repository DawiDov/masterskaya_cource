import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Paper from '@mui/material/Paper'
import { Container, Divider, Pagination } from "@mui/material"
import PropTypes from 'prop-types'


const Home = ({marathonData}) => {
  
  const navigate = useNavigate()

  return (
    <Container 
      maxWidth='md'
      sx={{
        textAlign: 'center',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {marathonData.map(day => 
      <Paper
        elevation='15'
        sx={{
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
      }}
        >{day}</Paper>)}
      <Divider sx={{margin: '10px'}}/>
      <Pagination 
        color='primary'
        count={4} 
        size='large'
        sx={{flex: 'end'}}
        />
    </Container>
  )
}

Home.propTypes = {
  marathonData: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
}

Home.defaultProps = {
  marathonData: [
    'день 1',
    'день 2',
    'день 3',
    'день 4',
    'дуень 5',
  ]
}

export default Home