import * as fs from 'fs';
import { ECPoint } from '../ECC/EllipticCurve';
import { LocalStorage } from 'node-localstorage';
import config from '../../config';

const localStorage = new LocalStorage('');

/**
 * Save single key point to a file
 * @param {bigint} key - The key value to safe.
 * @param {string} filename - The complete path of the file to store the key point
 */
export function saveKeyToFile(key: bigint, filename: string) {
    fs.writeFileSync(filename, key.toString());
}

/**
 * Read single key point from a file
 * @param {string} filename - The complete path of the file where the key is stored
 * @returns {bigint} The single key point stored on the file.
 */
export function readKeyFromFile(filename: string): bigint {
    const keyString = fs.readFileSync(filename, 'utf-8');
    return BigInt(keyString.trim()); // Convert the string to a bigint
}

/**
 * Save key pair point to a file
 * @param {bigint} privateKey_x - The x key value to safe.
 * @param {bigint} privateKey_y - The y key value to safe.
 * @param {string} filename - The complete path of the file to store the key point
 */
export function saveKeyPairToFile(privateKey_x: bigint, privateKey_y: bigint, filename: string) {
    const data = JSON.stringify({ x: privateKey_x.toString(), y: privateKey_y.toString() });
    fs.writeFileSync(filename, data);
}

/**
 * Read key pair point from a file
 * @param {string} filename - The complete path of the file where the key is stored
 * @returns {ECPoint} The key pair point stored on the file.
 */
export function readKeyPairFromFile(filename: string): ECPoint {
    const data = fs.readFileSync(filename, 'utf-8');
    const { x, y } = JSON.parse(data);
    return new ECPoint(BigInt(x as string), BigInt(y as string));
}

/**
 * Save key pair point to localStorage.
 * @param {string} key - The key under which the point is stored.
 * @param {ECPoint} point - The key pair point to be stored.
 */
export function saveKeyPairToLocalStorage(key: string, point: ECPoint): void {
    const data = JSON.stringify({ x: point.x.toString(), y: point.y.toString() });
    localStorage.setItem(key, data);
}

/**
 * Retrieve key pair point from localStorage.
 * @param {string} key - The key under which the point is stored.
 * @returns {ECPoint | null} The key pair point stored in localStorage, or null if not found.
 */
export function getKeyPairFromLocalStorage(key: string): ECPoint | null {
    const data = localStorage.getItem(key);
    if (data) {
        const { x, y } = JSON.parse(data);
        return new ECPoint(BigInt(x as string), BigInt(y as string));
    }
    return null;
}