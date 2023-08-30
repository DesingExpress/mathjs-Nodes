import { ImPure } from "@design-express/fabrica";

export class Evalute extends ImPure {
  static path = "Mathjs";
  static title = "Evalute";
  static description = "Mathjs Evalute";
  constructor() {
    super();
    this.properties = { enabledBulk: false };
    this.addInput("node", "mathjs::node");
    this.addInput("params", "object");
    this.addOutput("result", "number");
    this.addWidget(
      "toggle",
      "bulk",
      this.properties.enabledBulk,
      "enabledBulk"
    );
  }
  onPropertyChanged(_, val, prev) {
    if (prev !== undefined) {
      if (val) this.outputs[1].type = "array";
      else this.outputs[1].type = "number";
    }
  }

  async onExecute() {
    const _node = this.getInputData(1);
    const _params = this.getInputData(2);
    if (this.properties.enabledBulk) {
      const _constantParams = {};
      const _dynParams = [];
      let _maxLength = 0;
      Object.entries(_params).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          _dynParams.push([k, v]);
          if (_maxLength < v.length) _maxLength = v.length;
        } else {
          _constantParams[k] = v;
        }
      });
      const _result = new Array(_maxLength);
      for (let i = 0; i < _maxLength; i++) {
        const _moddedParams = { ..._params };
        _dynParams.forEach(([k, v]) => {
          _moddedParams[k] = v.at(i);
        });
        _result[i] = _node.evaluate(_moddedParams);
      }
      this.setOutputData(1, _result);
    } else this.setOutputData(1, _node.evaluate(_params));
  }
}
