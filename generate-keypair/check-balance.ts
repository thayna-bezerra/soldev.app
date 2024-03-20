import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("2j7V23siUPmxd9Dc9nDZc3BHH8dZfJbiifViBZJPHnvY");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Finished! The balance for the wallet at address ${publicKey} is in Lamports: ${balanceInLamports} and in SOL ${balanceInSOL}`)