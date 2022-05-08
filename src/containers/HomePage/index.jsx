import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Paper from '@mui/material/Paper'
import { Box, Divider, Pagination, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import TodayIcon from '@mui/icons-material/Today'


const Home = ({marathonData}) => {
  
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f8f6ee',
        borderRadius: '10px'
      }}>
      {marathonData.map(day => 
      <Paper
        elevation={15}
        sx={{
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#d3dec7',
        border: 'solid 1px white'
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
    </Box>
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
    'день 5',
  ]
}

export default Home