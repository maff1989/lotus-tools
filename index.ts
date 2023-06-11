import { _Script } from "./lib/script";
import { _Address } from "./lib/address";

const helpmsg = `Supported modules:
  script
  address

Supported actions:
  addressToScriptHex    Convert address (string) to Script hex (string)
`;

const main = async () => {
  // process command-line args
  const module = process.argv[2];
  const action = process.argv[3];

  const sub = () => {
    switch (module.toLowerCase()) {
      case 'script':
        // nothing implemented yet
        return '';
      case 'address':
        switch (action.toLowerCase()) {
          case 'addresstoscripthex':
            const address = process.argv[4];
            return _Address.addressToScriptHex(address);
        }
      
      default:
        return helpmsg;
    }
  };

  console.log(sub());

};
main().catch((e: Error) => console.log(`ERROR: ${e.message}`));