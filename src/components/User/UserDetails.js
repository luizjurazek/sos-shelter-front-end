import React from 'react';
import Style from './UserDetails.module.css'; // Vamos assumir que temos um arquivo CSS para estilos
import UserImg from '../../assets/img/users/perfil.png';

export default function UserDetails({ user }) {
  const [year, month, day] = user.birthday.split('-');

  return (
    <div className={Style.profileContainer}>
      <h2 className={Style.adminText}>Admin</h2>
      <div className={Style.profileHeader}>
        <img src={UserImg} alt="User Profile" className={Style.profileImage} />
        <h2 className={Style.profileName}>{user.name} {user.lastname}</h2>
      </div>
      
      <div className={Style.profileDetails}>
        <div className={Style.profileItem}>
          <label>Birthday:</label>
          <span>{day}/{month}/{year}</span>
        </div>
        <div className={Style.profileItem}>
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className={Style.profileItem}>
          <label>Phone Number:</label>
          <span>{user.phonenumber}</span>
        </div>
      </div>
    </div>
  );
}
