

import CryptoJS from 'crypto-js';

/**
 * AES-256-ECB对称加密
 * @param text {string} 要加密的明文
 * @param secretKey {string} 密钥，Base64编码的256位密钥（32字节或64字符）
 * @returns {string} 加密后的密文，Base64格式
 */
export const AES_ECB_ENCRYPT = (text: string, secretKey: string) => {
    // 确保密钥符合AES-256的要求（Base64解码后为256位）
    const keyBytes = CryptoJS.enc.Utf8.parse(secretKey);
    const messageBytes = CryptoJS.enc.Utf8.parse(text);
    const encrypted = CryptoJS.AES.encrypt(messageBytes, keyBytes, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
}

/**
 * AES-256-ECB对称解密
 * @param textBase64 {string} 要解密的密文，Base64格式
 * @param secretKey {string} 密钥，32 位随机大小写与数字
 * @returns {string} 解密后的明文
 */
export const AES_ECB_DECRYPT = (textBase64: string, secretKey: string) => {
    var keyHex = CryptoJS.enc.Utf8.parse(secretKey);
    var decrypt = CryptoJS.AES.decrypt(textBase64, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt);
}


/**
 * AES-256-CBC 对称加密
 * @param text {string} 要加密的明文
 * @param secretKey {string} 密钥，43位随机大小写与数字
 * @returns {string} 加密后的密文，Base64格式
 */
export const AES_CBC_ENCRYPT = (text: string, secretKey: string) => {
    var keyHex = CryptoJS.enc.Base64.parse(secretKey);
    var ivHex = keyHex.clone();
    // 前16字节作为向量
    ivHex.sigBytes = 16;
    ivHex.words.splice(4);
    var messageHex = CryptoJS.enc.Utf8.parse(text);
    var encrypted = CryptoJS.AES.encrypt(messageHex, keyHex, {
        "iv": ivHex,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

/**
 * AES-256-CBC对称解密
 * @param textBase64 {string} 要解密的密文，Base64格式
 * @param secretKey {string} 密钥，43位随机大小写与数字
 * @returns {string} 解密后的明文
 */
export const AES_CBC_DECRYPT = (textBase64: string, secretKey: string) => {
    var keyHex = CryptoJS.enc.Base64.parse(secretKey);
    var ivHex = keyHex.clone();
    // 前16字节作为向量
    ivHex.sigBytes = 16;
    ivHex.words.splice(4);
    var decrypt = CryptoJS.AES.decrypt(textBase64, keyHex, {
        "iv": ivHex,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt);
}