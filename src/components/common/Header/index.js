import React from "react";

const Header = () => {
  return (
    <>
      <section id="header" className="">
        <div className="py-8 ">
          <div className="flex justify-between items-center">
            <div>
              <img src="/logo.png" alt="Logo" />
            </div>

            <div className="connectwallet">
              <div className="left-menu flex">
                <div>
                  <button className="border border-2 rounded-3xl bg-transparent w-52 border-mygrey py-3 text-mygrey font-semibold">
                    Connect Wallet
                  </button>
                </div>
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
