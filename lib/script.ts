import { Address, Script } from "@abcpros/bitcore-lib-xpi";

export class _Script {
  static getScriptHexFromAddress(address: string) {
    if (!Address.isValid(address)) {
      throw new Error('address is invalid');
    }
    const script = Script.fromAddress(address);
    return script.toHex();
  };
}