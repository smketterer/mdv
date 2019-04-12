mdp
===

A command-line based markdown presentation tool.

_Basic controls:_

next slide      *Enter*, *Space*, *Page Down*, *j*, *l*,
                *Down Arrow*, *Right Arrow*

previous slide  *Backspace*, *Page Up*, *h*, *k*,
                *Up Arrow*, *Left Arrow*

quit            *q*
reload          *r*
slide N         *1..9*
first slide     *Home*, *g*
last slide      *End*, *G*

-------------------------------------------------

# Supported markdown formatting

The input file is split into multiple slides by
horizontal rules (hr). A hr consisting of at
least 3 *\** or *-*. It can also contain spaces but
no other characters.

Each of these represents the start of a new slide.

\* \* \*
\---
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\- - -

-------------------------------------------------

# mdp

It's in the game.

Here's some stuff:
- List goes Here
- Another _list_.
- More **styling**.
