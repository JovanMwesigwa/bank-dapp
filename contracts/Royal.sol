// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

// TODOS:
// Admin to whitelist tokens into the contract and their addresses
// Deposit ether into the contract
//  Withdraw ether
// Users to deposit other tokens into the contract
// Withdraw other token

error Royal__NotPermitted();
error Royal__NotEnoughEth();
error Royal__NotEnoughToken();

contract Royal {
    address private immutable i_owner;
    bytes32[] private s_whiteListedTokenSymbols;
    mapping(bytes32 => address) private s_listedTokenAddress;
    mapping(address => mapping(bytes32 => uint256)) private s_balances;
    uint256 private tokensCount;

    // events
    event NewTokenListed(address indexed tokenAddress, bytes32 indexed _symbol);

    constructor() {
        i_owner = msg.sender;
        tokensCount = 0;
    }

    // Main functions
    function whiteListToken(address tokenAddress, bytes32 symbol) public {
        if (msg.sender != i_owner) {
            revert Royal__NotPermitted();
        }

        s_listedTokenAddress[symbol] = tokenAddress;
        tokensCount += 1;

        emit NewTokenListed(tokenAddress, symbol);
    }

    function recieve() external payable {
        s_balances[msg.sender]['Eth'] += msg.value;
    }

    function withDrawEther(uint256 amount) public payable {
        if (s_balances[msg.sender]['Eth'] < amount) {
            revert Royal__NotEnoughEth();
        }

        s_balances[msg.sender]['Eth'] -= amount;

        payable(msg.sender).call{value: amount}('');
    }

    function depositOtherToken(bytes32 symbol, uint256 amount) public payable {
        s_balances[msg.sender][symbol] += amount;

        IERC20(s_listedTokenAddress[symbol]).transferFrom(
            msg.sender,
            address(this),
            amount
        );
    }

    function withDrawToken(bytes32 symbol, uint256 amount) public payable {
        if (s_balances[msg.sender][symbol] < amount) {
            revert Royal__NotEnoughToken();
        }

        s_balances[msg.sender][symbol] -= amount;

        IERC20(s_listedTokenAddress[symbol]).transfer(msg.sender, amount);
    }

    // Pure / View functions
    function getOwner() public view returns (address) {
        return i_owner;
    }

    function getListedTokenSymbols() public view returns (bytes32[] memory) {
        return s_whiteListedTokenSymbols;
    }

    function getTokenAddress(bytes32 _symbol) public view returns (address) {
        return s_listedTokenAddress[_symbol];
    }

    function getTokenCount() public returns (uint256) {
        return tokensCount;
    }
}
