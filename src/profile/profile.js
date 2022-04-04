import PropTypes from 'prop-types'
import React from 'react'
function Profile(props) {
    console.log(props)
  return (
    <div className='profile'>
         <p>{props.fullName}</p>
         <p>{props.bio}</p>
         <p>{props.profession}</p>
         <span>{props.children}</span>
          <button onClick={props.handleName}>alert</button>
          
        </div>
        

  )

}
Profile.defaultProps={
    fullName:'username',
    bio:'description',
    profession:'profession',
    children:'image'
}
Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string ,
    profession : PropTypes.string ,
}

export default Profile
