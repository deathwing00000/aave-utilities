/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export type ActionStruct = {
  target: PromiseOrValue<string>;
  data: PromiseOrValue<BytesLike>;
};

export type ActionStructOutput = [string, string] & {
  target: string;
  data: string;
};

export interface TxBuilderInterface extends utils.Interface {
  functions: {
    'AAVE_POOL()': FunctionFragment;
    'DOMAIN_SEPARATOR()': FunctionFragment;
    'FLASHLOAN_RECEIVER()': FunctionFragment;
    'REFERRAL_CODE()': FunctionFragment;
    'WRAPPED_BASE_TOKEN()': FunctionFragment;
    'aTokenMap(address)': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'debtTokenMap(address,uint256)': FunctionFragment;
    'executeActions((address,bytes)[])': FunctionFragment;
    'executeActionsWithSig(address,(address,bytes)[],uint256,bytes)': FunctionFragment;
    'flashOperation(address[],uint256[],uint256[],address,bytes)': FunctionFragment;
    'flashOperationSimple(address,uint256,uint256,address,bytes)': FunctionFragment;
    'nonces(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'pendingOwner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setTargetWhitelisted(address,bool)': FunctionFragment;
    'setTokenWhitelisted(address,bool)': FunctionFragment;
    'targetWhitelisted(address)': FunctionFragment;
    'tokenBalanceIn(address)': FunctionFragment;
    'tokenWhitelisted(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'unpause()': FunctionFragment;
    'updateATokenAddress(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'AAVE_POOL'
      | 'DOMAIN_SEPARATOR'
      | 'FLASHLOAN_RECEIVER'
      | 'REFERRAL_CODE'
      | 'WRAPPED_BASE_TOKEN'
      | 'aTokenMap'
      | 'acceptOwnership'
      | 'debtTokenMap'
      | 'executeActions'
      | 'executeActionsWithSig'
      | 'flashOperation'
      | 'flashOperationSimple'
      | 'nonces'
      | 'owner'
      | 'pause'
      | 'paused'
      | 'pendingOwner'
      | 'renounceOwnership'
      | 'setTargetWhitelisted'
      | 'setTokenWhitelisted'
      | 'targetWhitelisted'
      | 'tokenBalanceIn'
      | 'tokenWhitelisted'
      | 'transferOwnership'
      | 'unpause'
      | 'updateATokenAddress',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'AAVE_POOL', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'DOMAIN_SEPARATOR',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'FLASHLOAN_RECEIVER',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'REFERRAL_CODE',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'WRAPPED_BASE_TOKEN',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'aTokenMap',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'acceptOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'debtTokenMap',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'executeActions',
    values: [ActionStruct[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'executeActionsWithSig',
    values: [
      PromiseOrValue<string>,
      ActionStruct[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'flashOperation',
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'flashOperationSimple',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'nonces',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pendingOwner',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'setTargetWhitelisted',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'setTokenWhitelisted',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'targetWhitelisted',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenBalanceIn',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenWhitelisted',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'updateATokenAddress',
    values: [PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: 'AAVE_POOL', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'DOMAIN_SEPARATOR',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'FLASHLOAN_RECEIVER',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'REFERRAL_CODE',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'WRAPPED_BASE_TOKEN',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'aTokenMap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'acceptOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'debtTokenMap',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'executeActions',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'executeActionsWithSig',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'flashOperation',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'flashOperationSimple',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'nonces', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'pendingOwner',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTargetWhitelisted',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setTokenWhitelisted',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'targetWhitelisted',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenBalanceIn',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenWhitelisted',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateATokenAddress',
    data: BytesLike,
  ): Result;

  events: {
    'OwnershipTransferStarted(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(address)': EventFragment;
    'Unpaused(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferStarted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
}

export interface OwnershipTransferStartedEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<
  [string, string],
  OwnershipTransferStartedEventObject
>;

export type OwnershipTransferStartedEventFilter =
  TypedEventFilter<OwnershipTransferStartedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface TxBuilder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TxBuilderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AAVE_POOL(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    FLASHLOAN_RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<[number]>;

    WRAPPED_BASE_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    aTokenMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    debtTokenMap(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    executeActions(
      actions: ActionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    executeActionsWithSig(
      originator: PromiseOrValue<string>,
      actions: ActionStruct[],
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    flashOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    flashOperationSimple(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setTargetWhitelisted(
      target: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setTokenWhitelisted(
      token: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    targetWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    tokenBalanceIn(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    tokenWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateATokenAddress(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  AAVE_POOL(overrides?: CallOverrides): Promise<string>;

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  FLASHLOAN_RECEIVER(overrides?: CallOverrides): Promise<string>;

  REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

  WRAPPED_BASE_TOKEN(overrides?: CallOverrides): Promise<string>;

  aTokenMap(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  debtTokenMap(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  executeActions(
    actions: ActionStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  executeActionsWithSig(
    originator: PromiseOrValue<string>,
    actions: ActionStruct[],
    deadline: PromiseOrValue<BigNumberish>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  flashOperation(
    assets: PromiseOrValue<string>[],
    amounts: PromiseOrValue<BigNumberish>[],
    premiums: PromiseOrValue<BigNumberish>[],
    initiator: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  flashOperationSimple(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    premium: PromiseOrValue<BigNumberish>,
    initiator: PromiseOrValue<string>,
    params: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  nonces(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setTargetWhitelisted(
    target: PromiseOrValue<string>,
    toWhitelist: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setTokenWhitelisted(
    token: PromiseOrValue<string>,
    toWhitelist: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  targetWhitelisted(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  tokenBalanceIn(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  tokenWhitelisted(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateATokenAddress(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    AAVE_POOL(overrides?: CallOverrides): Promise<string>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    FLASHLOAN_RECEIVER(overrides?: CallOverrides): Promise<string>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<number>;

    WRAPPED_BASE_TOKEN(overrides?: CallOverrides): Promise<string>;

    aTokenMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    debtTokenMap(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    executeActions(
      actions: ActionStruct[],
      overrides?: CallOverrides,
    ): Promise<void>;

    executeActionsWithSig(
      originator: PromiseOrValue<string>,
      actions: ActionStruct[],
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    flashOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    flashOperationSimple(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides,
    ): Promise<void>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setTargetWhitelisted(
      target: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setTokenWhitelisted(
      token: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    targetWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    tokenBalanceIn(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateATokenAddress(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'OwnershipTransferStarted(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferStartedEventFilter;
    OwnershipTransferStarted(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferStartedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    AAVE_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    FLASHLOAN_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<BigNumber>;

    WRAPPED_BASE_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    aTokenMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    debtTokenMap(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    executeActions(
      actions: ActionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    executeActionsWithSig(
      originator: PromiseOrValue<string>,
      actions: ActionStruct[],
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    flashOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    flashOperationSimple(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setTargetWhitelisted(
      target: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setTokenWhitelisted(
      token: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    targetWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenBalanceIn(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateATokenAddress(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AAVE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FLASHLOAN_RECEIVER(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    REFERRAL_CODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WRAPPED_BASE_TOKEN(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    aTokenMap(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    debtTokenMap(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    executeActions(
      actions: ActionStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    executeActionsWithSig(
      originator: PromiseOrValue<string>,
      actions: ActionStruct[],
      deadline: PromiseOrValue<BigNumberish>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    flashOperation(
      assets: PromiseOrValue<string>[],
      amounts: PromiseOrValue<BigNumberish>[],
      premiums: PromiseOrValue<BigNumberish>[],
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    flashOperationSimple(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      initiator: PromiseOrValue<string>,
      params: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setTargetWhitelisted(
      target: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setTokenWhitelisted(
      token: PromiseOrValue<string>,
      toWhitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    targetWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenBalanceIn(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenWhitelisted(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateATokenAddress(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}