/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  FairbearFactory,
  FairbearFactory_Buy,
  FairbearFactory_Sell,
} from "generated";

FairbearFactory.Buy.handler(async ({ event, context }) => {
  const entity: FairbearFactory_Buy = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockTimestamp: event.block.timestamp,
    blockNumber: event.block.number,
    token: event.params.token,
    from: event.params.from,
    to: event.params.to,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
  };

  context.FairbearFactory_Buy.set(entity);
});

FairbearFactory.Sell.handler(async ({ event, context }) => {
  const entity: FairbearFactory_Sell = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockTimestamp: event.block.timestamp,
    blockNumber: event.block.number,
    token: event.params.token,
    from: event.params.from,
    to: event.params.to,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
  };

  context.FairbearFactory_Sell.set(entity);
});
