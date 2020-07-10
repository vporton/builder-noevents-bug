// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.6.0;

contract Files {

    uint maxId = 0;

    event CategoryCreated(uint256 indexed categoryId, string title, string locale);

    constructor() public {
    }

    function createCategory(string calldata _title, string calldata _locale) external {
        emit CategoryCreated(++maxId, _title, _locale);
    }
}
