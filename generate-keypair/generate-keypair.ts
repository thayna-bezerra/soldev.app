import "dotenv/config"
import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// GERANDO UM NOVO PAR DE CHAVES
const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);

// CARREGANDO UM PAR DE CHAVES EXISTENTE
const keypairExists = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);