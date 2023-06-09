import React, { useState, useEffect, Fragment } from "react";
import { useSorobanReact } from "@soroban-react/core";
import { ConnectButton } from "@soroban-react/connect-button";
import { WalletData } from "@soroban-react/wallet-data";

const Header = () => {
  const [publicKey, setPublicKey] = useState(false);
  const sorobanContext = useSorobanReact();

  const { address } = sorobanContext || {};

  console.log(address, "address")

  useEffect(() => {
    if (address) {
      getKey();
    }
  }, [address]);

  const getKey = async () => {
    if (await window?.freighterApi?.getPublicKey()) {
      setPublicKey(true);
    }
  };

  return (
    <>
      <section id="header" className="">
        <div className="py-8 ">
          <div className="flex justify-between items-center">
            <div>
              <img src="/logo.png" alt="Logo" />
            </div>

            <div className="connectwallet">
              <div className="left-menu flex items-center">
                  {!publicKey && (
                <div className="border border-2 rounded-3xl bg-transparent w-52 border-mygrey py-3 text-mygrey font-semibold">
                    <ConnectButton
                      label="Connect Wallet"
                      sorobanContext={sorobanContext}
                    />
                </div>
                  )}

                {publicKey && (
                  <div className="border border-2 rounded-full text-center bg-transparent w-72 border-mygrey py-2 text-mygrey font-semibold">
                    <WalletData sorobanContext={sorobanContext} />
                  </div>
                )}

                <div className="ml-3">
                  <img src="menu.png" alt="" className="w-9/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
