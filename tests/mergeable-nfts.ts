import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { MergeableNfts } from "../target/types/mergeable_nfts";

describe("mergeable-nfts", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.MergeableNfts as Program<MergeableNfts>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
