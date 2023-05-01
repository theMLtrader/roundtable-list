const arbitrumNova = require("./protocols/arbitrum-nova.json");
const arbitrumOne = require("./protocols/arbitrum-one.json");

module.exports = function buildList() {
    return {
        name: "Camelot RoundTable",
        timestamp: new Date().toISOString(),
        protocols: [...arbitrumNova, ...arbitrumOne]
            // sort them by symbol for easy readability
            .sort((p1, p2) => {
                if (p1.chainId === p2.chainId) {
                    return p1.name.toLowerCase() < p2.name.toLowerCase() ? -1 : 1;
                }
                return p1.chainId < p2.chainId ? -1 : 1;
            }),
    };
};