import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Paper from '@mui/material/Paper'
import { Container, Divider, Pagination, Typography } from "@mui/material"
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
        borderRadius: '10px',
        backgroundColor: '#d3dec7'
      }}> 
        <Typography sx={{ 
          fontFamily: 'Monospace', 
          letterSpacing: 4 ,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          }}>
          {day}
        </Typography>
      </Paper>)}
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
    'day 1',
    'day 2',
    'day 3',
    'day 4',
    'day 5',
  ]
}

export default Home