import { DataTypes } from 'sequelize';
import sequelize from '../config/database'; 

const User = sequelize.define('User', {
 // Define user attributes (e.g., id, username, email, password_hash, balance)
 name: {
   type: DataTypes.STRING,
   allowNull: false
 },
 // ... other attributes
});

module.exports = User;

import Transaction from './models/transaction';

// ... rest of your server setup