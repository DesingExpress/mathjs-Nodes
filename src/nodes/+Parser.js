import { ImPure } from "@design-express/fabrica";
import { parse } from "mathjs";

export class Parser extends ImPure {
  static path = "Mathjs";
  static title = "Parser";
  static description = "Mathjs Parser";
  constructor() {
    super();
    this.addInput("expression", "string");
    this.addOutput("node", "mathjs::node");
  }

  async onExecute() {
    const _raw = this.getInputData(1);

    this.setOutputData(1, parse(_raw).compile());
  }
}
