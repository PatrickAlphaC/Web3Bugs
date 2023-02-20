/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface VMochiInterface extends ethers.utils.Interface {
  functions: {
    "CREATE_LOCK_TYPE()": FunctionFragment;
    "DEPOSIT_FOR_TYPE()": FunctionFragment;
    "INCREASE_LOCK_AMOUNT()": FunctionFragment;
    "INCREASE_UNLOCK_TIME()": FunctionFragment;
    "MAXTIME()": FunctionFragment;
    "MULTIPLIER()": FunctionFragment;
    "WEEK()": FunctionFragment;
    "approve(address,bool)": FunctionFragment;
    "approved(address,address)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfAt(address,uint256)": FunctionFragment;
    "checkPoint()": FunctionFragment;
    "createLock(uint256,uint256)": FunctionFragment;
    "createLockFor(address,uint256,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "depositFor(address,uint256)": FunctionFragment;
    "epoch()": FunctionFragment;
    "exchangeRate()": FunctionFragment;
    "getLastUserSlope(address)": FunctionFragment;
    "increaseAmount(uint256)": FunctionFragment;
    "increaseUnlockTime(uint256)": FunctionFragment;
    "lockEnd(address)": FunctionFragment;
    "locked(address)": FunctionFragment;
    "mochi()": FunctionFragment;
    "name()": FunctionFragment;
    "pointHistory(uint256)": FunctionFragment;
    "slopeChanges(uint256)": FunctionFragment;
    "supply()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "totalSupplyAt(uint256)": FunctionFragment;
    "userPointEpoch(address)": FunctionFragment;
    "userPointHistory(address,uint256)": FunctionFragment;
    "userPointHistoryTs(address,uint256)": FunctionFragment;
    "version()": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawFor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CREATE_LOCK_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEPOSIT_FOR_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCREASE_LOCK_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCREASE_UNLOCK_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAXTIME", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MULTIPLIER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WEEK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "approved",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createLock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createLockFor",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exchangeRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastUserSlope",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseUnlockTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lockEnd", values: [string]): string;
  encodeFunctionData(functionFragment: "locked", values: [string]): string;
  encodeFunctionData(functionFragment: "mochi", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pointHistory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "slopeChanges",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "supply", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyAt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userPointEpoch",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userPointHistory",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userPointHistoryTs",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdrawFor", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "CREATE_LOCK_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEPOSIT_FOR_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCREASE_LOCK_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCREASE_UNLOCK_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAXTIME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MULTIPLIER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WEEK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createLock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createLockFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastUserSlope",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseUnlockTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockEnd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mochi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pointHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slopeChanges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userPointEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userPointHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userPointHistoryTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFor",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256,uint256,int128,uint256)": EventFragment;
    "Supply(uint256,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class VMochi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VMochiInterface;

  functions: {
    CREATE_LOCK_TYPE(overrides?: CallOverrides): Promise<[BigNumber]>;

    DEPOSIT_FOR_TYPE(overrides?: CallOverrides): Promise<[BigNumber]>;

    INCREASE_LOCK_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    INCREASE_UNLOCK_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAXTIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;

    WEEK(overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      _approvee: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "balanceOf(address,uint256)"(
      _user: string,
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfAt(
      _user: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkPoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLock(
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLockFor(
      _user: string,
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    depositFor(
      _user: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLastUserSlope(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseAmount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseUnlockTime(
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockEnd(_user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    locked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; end: BigNumber }>;

    mochi(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    pointHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    slopeChanges(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supply(overrides?: CallOverrides): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply(uint256)"(
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupplyAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userPointEpoch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userPointHistory(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    userPointHistoryTs(
      _user: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawFor(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CREATE_LOCK_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

  DEPOSIT_FOR_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

  INCREASE_LOCK_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  INCREASE_UNLOCK_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;

  MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

  WEEK(overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    _approvee: string,
    _flag: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approved(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "balanceOf(address,uint256)"(
    _user: string,
    _t: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfAt(
    _user: string,
    _block: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkPoint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLock(
    _value: BigNumberish,
    _unlockAt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLockFor(
    _user: string,
    _value: BigNumberish,
    _unlockAt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  depositFor(
    _user: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeRate(overrides?: CallOverrides): Promise<BigNumber>;

  getLastUserSlope(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseAmount(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseUnlockTime(
    _unlockTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockEnd(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  locked(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; end: BigNumber }>;

  mochi(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  pointHistory(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
      blk: BigNumber;
    }
  >;

  slopeChanges(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  supply(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply(uint256)"(
    _t: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalSupplyAt(
    _block: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  userPointHistory(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
      blk: BigNumber;
    }
  >;

  userPointHistoryTs(
    _user: string,
    _idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawFor(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CREATE_LOCK_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    DEPOSIT_FOR_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASE_LOCK_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASE_UNLOCK_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;

    MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    WEEK(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      _approvee: string,
      _flag: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "balanceOf(address,uint256)"(
      _user: string,
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      _user: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkPoint(overrides?: CallOverrides): Promise<void>;

    createLock(
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createLockFor(
      _user: string,
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    depositFor(
      _user: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRate(overrides?: CallOverrides): Promise<BigNumber>;

    getLastUserSlope(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAmount(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseUnlockTime(
      _unlockTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockEnd(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    locked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; end: BigNumber }>;

    mochi(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    pointHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    slopeChanges(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supply(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply(uint256)"(
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userPointHistory(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    userPointHistoryTs(
      _user: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawFor(_user: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Deposit(
      provider?: string | null,
      value?: null,
      locktime?: BigNumberish | null,
      depositType?: null,
      ts?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        provider: string;
        value: BigNumber;
        locktime: BigNumber;
        depositType: BigNumber;
        ts: BigNumber;
      }
    >;

    Supply(
      prevSupply?: null,
      supply?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { prevSupply: BigNumber; supply: BigNumber }
    >;

    Withdraw(
      provider?: string | null,
      value?: null,
      ts?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { provider: string; value: BigNumber; ts: BigNumber }
    >;
  };

  estimateGas: {
    CREATE_LOCK_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    DEPOSIT_FOR_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASE_LOCK_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASE_UNLOCK_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    MAXTIME(overrides?: CallOverrides): Promise<BigNumber>;

    MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    WEEK(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      _approvee: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      _user: string,
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfAt(
      _user: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkPoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLock(
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLockFor(
      _user: string,
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    depositFor(
      _user: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRate(overrides?: CallOverrides): Promise<BigNumber>;

    getLastUserSlope(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAmount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseUnlockTime(
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockEnd(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    locked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mochi(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    pointHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slopeChanges(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supply(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply(uint256)"(
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    userPointHistory(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userPointHistoryTs(
      _user: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawFor(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CREATE_LOCK_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEPOSIT_FOR_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INCREASE_LOCK_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INCREASE_UNLOCK_TIME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAXTIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WEEK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      _approvee: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address,uint256)"(
      _user: string,
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      _user: string,
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkPoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLock(
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLockFor(
      _user: string,
      _value: BigNumberish,
      _unlockAt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositFor(
      _user: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLastUserSlope(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAmount(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseUnlockTime(
      _unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockEnd(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    locked(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mochi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pointHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slopeChanges(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply(uint256)"(
      _t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplyAt(
      _block: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userPointEpoch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userPointHistory(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userPointHistoryTs(
      _user: string,
      _idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFor(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}