![math.js](https://raw.github.com/josdejong/mathjs/master/misc/img/mathjs.png)

# [Math.js](https://github.com/josdejong/mathjs) Nodes

Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. Powerful and easy to use.

## 🔲Parser Node

---

Convert String to Mathjs node.

```litegraph
{
  "title": "Parser",
  "inputs": [
    { "label": "expression" }
  ],
  "outputs": [{ "label": "node" }]
}
```

### ◽Location

`Mathjs` > `Parser`

### ◽Slots

#### Inputs

| Label                         | Type     | Description                                                                                                    |
| ----------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| [**expression**](#1-template) | `string` | Text that convert to 'mathjs::node'. See the [Support Syntax](https://mathjs.org/docs/expressions/syntax.html) |

#### Outputs

| Label    | Type           | Description          |
| -------- | -------------- | -------------------- |
| **node** | `mathjs::node` | Compiled mathjs node |

&nbsp;
&nbsp;

## 🔲Evaluate Node

---

Calculate using mathjs::node and Parameters.

```litegraph
{
  "title": "Evalute",
  "inputs": [
    { "label": "node" },
    { "label": "params" }
  ],
  "outputs": [{ "label": "result" }]
}
```

### ◽Location

`Mathjs` > `Evaluate`

### ◽Slots

#### Inputs

| Label                     | Type           | Description                             |
| ------------------------- | -------------- | --------------------------------------- |
| node                      | `mathjs::node` | Compiled mathjs node to using evalution |
| [**params**](#1-template) | `object`       | parameters                              |

#### Outputs

| Label  | Type                | Description |
| ------ | ------------------- | ----------- |
| result | `number` \| `array` | result      |

#### Widgets

| Label | Type      | Description                                                                                                   |
| ----- | --------- | ------------------------------------------------------------------------------------------------------------- |
| bulk  | `boolean` | If you turn on this option, you can receive the results calculated through the parameters entered as an array |

## Source Code

Math.js-Nodes is Open Source and You can see the code in [Github](https://github.com/DesingExpress/mathjs-Nodes)

## License

Math.js-Nodes is licensed under the [Apache-2.0 license](https://www.apache.org/licenses/LICENSE-2.0).
