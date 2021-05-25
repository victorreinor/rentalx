import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: '192.168.2.19',
      database:
        process.env.NODE_ENV === 'test'
          ? 'rentx_test'
          : defaultOptions.database,
    })
  );
};
