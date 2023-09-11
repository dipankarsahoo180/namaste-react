import React from 'react'

const styleCard = {
    background: 'lightgrey',
    textAlign:'center',
    height: '350px',
    marginBottom: '25px'
}

const Shimmer = () => {
  return (
    <div className="res-container">
        <div className="res-card" style={styleCard}>
        </div>
        <div className="res-card" style={styleCard}>
        </div>
        <div className="res-card" style={styleCard}>
        </div>
        <div className="res-card" style={styleCard}>
        </div>
        <div className="res-card" style={styleCard}>
        </div>
    </div>
  )
}

export default Shimmer