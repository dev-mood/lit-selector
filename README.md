# LitSelector

<p>LitSelector is a small and fast JavaScript library. It allows to select elements of the DOM in a very easy and efficient way.</p>

[![GitHub issues](https://img.shields.io/github/issues/regdev18/lit-selector)](https://github.com/regdev18/lit-selector/issues)
[![GitHub license](https://img.shields.io/github/license/regdev18/lit-selector)](https://github.com/regdev18/lit-selector/blob/master/LICENSE)

## Usage

<p>To include LitSelector, first install with npm.</p>

`npm i lit-selector`

## Examples

### Finding the first element matching a class

<p>
  In this example, the first element in the document with the class "myclass" is returned:
</p>

<p>
  <code>
    const el = ls(".myclass");
  </code>
</p>

### A more complex selector

<p>
<code>
const el = ls("div.user-panel.main input[name='login']");
</code>
</p>

### Obtaining a list of matches

<p>
  Here, we get a list of <p> elements whose immediate parent element is a <div> with the class highlighted and which are located inside a container whose ID is test.
</p>

<p>
  <code>
    const container = ls("#test");
    const matches = container.ls("div.highlighted > p");
  </code>
</p>

### Accessing the matches

<p>
  Once the NodeList of matching elements is returned, you can examine it just like any array. If the array is empty (that is, its length property is 0), then no matches were found.

Otherwise, you can simply use standard array notation to access the contents of the list. You can use any common looping statement, such as:

</p>

<p>
  <code>
    const users = ls(".users");

    users.forEach((userItem) => {
      console.log(userItem);
    });

  </code>
</p>
