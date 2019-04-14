# mdp

It's in the game.

Here's some stuff:
- List goes Here
- Another _list_.
- More **styling**.

```python
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    def created():
      somefunc('hi', 0)

>>> message = '''interpreter
... prompt'''
```

More code here!

```js
mounted: function() {
  // Close the program when CTRL+C is pressed.
  this.$refs.screen.key(['C-c'], () => {
    process.exit(0)
  })

  // Error if no file provided.
  if (typeof process.argv[2] === 'undefined') {
    throw new Error("No file provided.")
  }

  // Set the file
  this.file = process.argv[2]

  // Read file with UTF-8 encoding
   fs.readFile(`./${ this.file }`, 'utf8', (err, contents) => {
     // Generates SGR sequences which can be read by blessed.
     this.fileContents = marked(contents)
     // Go through and syntax highlight afterwords...
   })
  // console.log(marked(this.fileContents))
}
```
