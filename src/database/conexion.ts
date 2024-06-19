import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

const admisionConfig = {
  user: `${process.env.USER_DB1}`,
  password: `${process.env.PASS_DB1}`,
  server: `${process.env.HOST_DB1}`,
  database: `${process.env.NAME_BD1}`
}

const db1 = new Sequelize(admisionConfig.database, admisionConfig.user, admisionConfig.password, {
  host: admisionConfig.server,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: false
    }
  }
});

const declaracionJuradaConfig = {
  user: `${process.env.USER_DB2}`,
  password: `${process.env.PASS_DB2}`,
  server: `${process.env.HOST_DB2}`,
  database: `${process.env.NAME_BD2}`
}

const db2 = new Sequelize(declaracionJuradaConfig.database, declaracionJuradaConfig.user, declaracionJuradaConfig.password, {
  host: declaracionJuradaConfig.server,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: false
    }
  }
});

const comercioConfig = {
  user: `${process.env.USER_DB3}`,
  password: `${process.env.PASS_DB3}`,
  server: `${process.env.HOST_DB3}`,
  database: `${process.env.NAME_BD3}`
}

const db3 = new Sequelize(comercioConfig.database, comercioConfig.user, comercioConfig.password, {
  host: comercioConfig.server,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: false
    }
  }
});

const pagosConfig = {
  user: `${process.env.USER_DB4}`,
  password: `${process.env.PASS_DB4}`,
  server: `${process.env.HOST_DB4}`,
  database: `${process.env.NAME_BD4}`
}

const db4 = new Sequelize(pagosConfig.database, pagosConfig.user, pagosConfig.password, {
  host: pagosConfig.server,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: false
    }
  }
});

/** EDOCENTE */
const academicaConfig = {
  user: `${process.env.USER_DB5}`,
  password: `${process.env.PASS_DB5}`,
  server: `${process.env.HOST_DB5}`,
  database: `${process.env.NAME_DB5}`
}

const db5 = new Sequelize(academicaConfig.database, academicaConfig.user, academicaConfig.password, {
  host: academicaConfig.server,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: false
    }
  }
});
export { db1, db2, db3, db4, db5 };
