import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import { AuthenticationContext } from './../../../shared/AuthenticationContext';

const ProfileCard = (props) => {
    const { state } = useContext(AuthenticationContext);

    const {username} = useParams();
    
    const logginUserName = state.username;
   
    let message = (<i> WE CAN NOT EDIT</i>)
    if(username === logginUserName){
        message = (<i> WE CAN EDITS</i>)
    }
    return (
        <div>
          {message}
        </div>
    )
}

export default ProfileCard;
