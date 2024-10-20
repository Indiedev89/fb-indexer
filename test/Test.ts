import assert from "assert";
import {
  TestHelpers,
  FairbearFactory_Buy
} from "generated";
const { MockDb, FairbearFactory } = TestHelpers;

describe("FairbearFactory contract Buy event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for FairbearFactory contract Buy event
  const event = FairbearFactory.Buy.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("FairbearFactory_Buy is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await FairbearFactory.Buy.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualFairbearFactoryBuy = mockDbUpdated.entities.FairbearFactory_Buy.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`,
    );

    // Creating the expected entity
    const expectedFairbearFactoryBuy: FairbearFactory_Buy = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      blockTimestamp: event.block.timestamp,
      blockNumber: event.block.number,
      token: event.params.token,
      from: event.params.from,
      to: event.params.to,
      amountIn: event.params.amountIn,
      amountOut: event.params.amountOut,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualFairbearFactoryBuy, expectedFairbearFactoryBuy, "Actual FairbearFactoryBuy should be the same as the expectedFairbearFactoryBuy");
  });
});
