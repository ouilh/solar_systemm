// pages/api/serialRead.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Your serial reading logic goes here
  // Use libraries like 'serialport' to read from the serial port

  // Example using serialport library
  const SerialPort = require('serialport');
  const Readline = require('@serialport/parser-readline');

  const port = new SerialPort('/dev/ttyUSB0', { baudRate: 9600 });
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

  parser.on('data', (data: string) => {
    res.status(200).json({ serialData: data });
  });
}
