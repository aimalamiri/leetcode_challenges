/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = [];
    
    for (let i = 0; i < accounts.length; i++) {
        let total = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            total += accounts[i][j];
        }
        sum.push(total);
    }
    
    return Math.max(...sum);
};
