// setup DB table functions here.

require('dotenv').config();

import db from '../../config/database';
import {
  success,
  error
} from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success('successfully created db ', database);
  } catch (err) {
    error('error creating db ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped db ', database);
  } catch (err) {
    error('error dropping db ', database);
  }
};

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS ${database}`
    );
    success('successfully using db ', database);
  } catch (err) {
    error('error using db ', database);
  }
};

