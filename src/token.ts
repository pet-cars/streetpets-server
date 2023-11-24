import jwt from 'jsonwebtoken';

const secret = 'senhaLegal';

export function generateToken(payload: any): string {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

export function verifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return null;
  }
}