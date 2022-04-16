require("@nomiclabs/hardhat-waffle");
// require("dotenv").config({ path: ".env" });

module.exports = {
    solidity: "0.8.4",
    networks: {
      rinkeby: {
        url : 'https://eth-rinkeby.alchemyapi.io/v2/HeiycHxCM4S03aThnR6z1szznb0oI4f1',
        accounts: ['f7f8252e2ad662c9da1fb9276e51f5144e9b69eb178030b9e261e1b535823b49']
      }
    }
};
