export default {
    port: 1338,
    dbUri: "mongodb://root:rootpassword@localhost:27017/admin",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    accessTokenPrivateKey: `
    -----BEGIN RSA PRIVATE KEY-----
MIICXwIBAAKBgQCnn90qPutqj5WkBoZDXHsKXuGXLJmfpyuGI4Ut/D0o9cM8Lbfz
//W200OABR7gZU12/SXtq/pxp5I9Llfd92r0dYCVWogFETsz8neajX+sFgVCaNYV
YdnZMnhgRwBoOmAbbih8fkInOBzyixdUFIqxR7iY/5IEmuRvXHbKD0DPSwIDAQAB
AoGBAJj+j9XkUekUHuf0UI2hFmiTy2G5Aoq3AUHQn9kmFgiRsF33+KOLZxE06LIr
elAkBj1ptzmkM9WStiaDaw2cqw/yy3sg9hEnLjqZvv+9uBuyqAO74DEMxU1B+ZrW
b69SX12Sfh5tbJxsbkIsQ5TS1Jej2cbMdEGUhLDvA0mdspYpAkEA52eUSrTdzbZq
/dCaoJQVAQLncH4LjSG/NajLr1ZFUJPS5YjrgsQ6P7qh/x8vyJjiI8wdou+Zmz8p
UkVLinl+pwJBALlw2rJOzXPoaMPJyH7pJQhnAidOOsc7dF2QJbEfVmkwgHP/EqoE
yfHhVqJyi7FjpuaHhljO4lS89KQMXoYHAr0CQQC6ARlC/6U2gMX5pV9VahKEEJiG
ZNrWI+U1taucEcV/ooMoO+nK3/5OUa97ic73+GP2EFFWMjAPiTKmzcqN0WELAkEA
kv1tnODx4epbALa1gkNz41EjV9yeosXx2ygjeF6KtB6J82hAdxwMpvojHekF6bo/
1YOfbk2vAdQ1ZsOXOU3dUQJBALjsLDV3Tpqf35yqmBrVuVw/Vw8yau3eAJeIdDQ5
r7ZYvnaWGzCYWQOMZekMNdplscN2Hh9MV0H1FkpzUbxN84A=
-----END RSA PRIVATE KEY-----`,
    accessTokenPublicKey: `
    -----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnn90qPutqj5WkBoZDXHsKXuGX
LJmfpyuGI4Ut/D0o9cM8Lbfz//W200OABR7gZU12/SXtq/pxp5I9Llfd92r0dYCV
WogFETsz8neajX+sFgVCaNYVYdnZMnhgRwBoOmAbbih8fkInOBzyixdUFIqxR7iY
/5IEmuRvXHbKD0DPSwIDAQAB
-----END PUBLIC KEY-----`,
    refreshTokenPrivateKey: ``,
    refreshTokenPublicKey: ``,
  };