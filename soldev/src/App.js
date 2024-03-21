import { Keypair } from "@solana/web3.js";
import "dotenv/config";

function App() {
  // Cria um novo par de chaves
  const keypair = Keypair.generate();

  console.log(`The public key is: `, keypair.publicKey.toBase58());
  console.log(`The secret key is: `, keypair.secretKey);

  // Carrega um par de chaves existente 
  // Armazenado em um arquivo .env => getKeypairFromEnvironment("SECRET_KEY");
  // Armazenado em um sistema de arquivos => getKeypairFromFile()


}

export default App;



