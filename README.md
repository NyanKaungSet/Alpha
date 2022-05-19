# Table of Contents <a id="top"></a>
1. [Headings](#headings)
2. [Paragraphs](#paragraphs)
3. [Line Break, bold, italic and Emphasis](#LbEBI)
4. [Blockquotes](#blockquotes)
5. [Lists](#lists)
6. [Images](#images)
7. [Code](#code)
8. [Horizontal Rules(hr)](#hr)
9. [Links](#links)
10. [Tables](#tables)
11. [Others](#others)

*****

# Headings <a id="headings"></a>
[Back to Top](#top)<br>
To make a heading, put # in front of the text. The number of number sign you use correspond to heading level. For example, if you put 3 number signs, the heading level is 3.
|Markdown                      |HTML                            | Output                   |
|------------------------------|--------------------------------|--------------------------|
| ```# Heading Level 1```      | ```<h1>Heading Level 1</h1>``` | <h1>Heading Level 1</h1> |
| ```## Heading Level 2```     | ```<h2>Heading Level 2</h2>``` | <h2>Heading Level 2</h2> |
| ```### Heading Level 3```    | ```<h3>Heading Level 3</h3>``` | <h3>Heading Level 3</h3> |
| ```#### Heading Level 4```   | ```<h4>Heading Level 4</h4>``` | <h4>Heading Level 4</h4> |
| ```##### Heading Level 5```  | ```<h5>Heading Level 5</h5>``` | <h5>Heading Level 5</h5> | 
| ```###### Heading Level 6``` | ```<h6>Heading Level 6</h6>``` | <h6>Heading Level 6</h6> |

<br><br>

### Alternate Syntax
Alternatively, on the line below the text add any number of == characters for heading level 1 or -- character for heading level 2.
|Markdown                      |HTML                            | Output                   |
|------------------------------|--------------------------------|--------------------------|
| # Heading Level 1 <br> ------------------ | ```<h1>Heading Level 1</h1>``` | <h1>Heading Level 1</h1> |
| ## Heading Level 2 <br> ============== | ```<h2>Heading Level 2</h2>``` | <h2>Heading Level 2</h2> |


| :x: Don't do this        | :heavy_check_mark: Do this|
|--------------------------|---------------------------|
|    #This is a heading    | # This is a heading       |

**You have to put a space between number sign '#' and the heading name. You should also put blank lines before and after a heading for compatibility.**

*****

# Paragraphs <a id="paragraphs"></a>
[Back to Top](#top)<br>
To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.
*****

# Line Break, bold, italic and Emphasis <a id="LbEBI"></a>
[Back to Top](#top)
## Line Break
There are many ways to create line break. To mention a few, 
1. If your Markdown application suppports HTML, you can use `<br>`.
2. End a line with 2 or more spaces then tap 'return'.
3. In some Markdown applications, you can use backslash `\` to create a new line. <br>

***Markdown***<br>
This is the first line.&lt;br&gt;<br>
This is the second line.
<br>

***Output***<br>
This is the first line.<br>
This is the second line.
<br>

## Bold
To bold a text use 2 asterisks `(*)` or underscore `(_)` before and after the text.<br>
***Markdown***<br>
`**Bold text**`<br>
`__Bold text__`<br>
<br>

***Output***<br>
**Bold text**<br>
__Bold text__<br>
<br>

## Italic
To italicize a text use one asterisk `(*)` or underscore `(_)` before and after the text.<br>
***Markdown***<br>
`*Italicized text*`<br>
`Italicized text_`<br>
<br>

***Output***<br>
*Italicized text*<br>
_Italicized text_<br>
<br>

## Emphasis
To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.
| Markdown                                  | HTML                                                          | Output                                  |
|-------------------------------------------|---------------------------------------------------------------|-----------------------------------------|
| `This text is ***really important***.`    | `This text is <em><strong>really important.</strong></em>`    | This text is ***really important***.    |
| `This text is ___really important___.`    | `This text is <em><strong>really important.</strong></em>`    | This text is ___really important___.    |
| `This text is __*really important*__.`    | `This text is <em><strong>really important.</strong></em>`    | This text is __*really important*__.    |
| `This text is **_really important_**.`    | `This text is <em><strong>really important.</strong></em>`    | This text is **_really important_**.    |
| `This is really***very***important text.` | `This text is really<em><strong>very</strong><em> important.` | This is really***very***important text. |  

<br>
Note: The order of the `em` and `strong` tags might be reversed depending on the Markdown processor you're using. Markdown applications don't agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold and italicize the middle of a word for emphasis.

*****

# Blockquotes <a id="Blockquotes"></a>
[Back to Top](#top)<br>
If you want to create a blockquote, add a > in front of the text.

***Markdown***<br>
`> This is a blockquote.`

<br>

***HTML***<br>
&lt;blockquote&gt;<br>
   &lt;p&gt;This is a blockquote.&lt;/p&gt;<br>
&lt;/blockquote&gt;
<br>

***Output***<br>
  > This is a blockquote.
*****

# Lists <a id="lists"></a>
[Back to Top](#top)<br>

## Ordered List
To create an ordered list, add line items with numbers followed by periods. The numbers don't have to be in numerical order, but the list should start with the number one. To nest line items in an ordered list, indent the items four spaces or one tab.
| Markdown                            | HTML | Output |
|-------------------------------------|------|--------|
| `1.` First item<br>`2.` Second item |<ol><br> <li>First item</li><br> <li>Second item</li><br> </ol> | 1. First item<br> 2. Second item |

*****

## Unordered List
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. To nest line items in an ordered list, indent the items four spaces or one tab.
| Markdown | HTML | Output |
|---------------------|--------------------|----------------|
| `- First item`<br> `- Second item`<br> `- Third item`<br> |`<ul>`<br> `<li>First item</li>`<br> `<li>Second item</li>`<br> `<li>Third item</li>`<br> `</ul>` |<ul><br> <li>First item</li><br> <li>Second item</li><br> <li>Third item</li> </ul> |
| `* First item`<br> `* Second item`<br> `* Third item`<br> |`<ul>`<br> `<li>First item</li>`<br> `<li>Second item</li>`<br> `<li>Third item</li>`<br> `</ul>` |<ul><br> <li>First item</li><br> <li>Second item</li><br> <li>Third item</li> </ul> |
| `* First item`<br> `+ Second item`<br> `- Third item`<br> |`<ul>`<br> `<li>First item</li>`<br> `<li>Second item</li>`<br> `<li>Third item</li>`<br> `</ul>` |<ul><br> <li>First item</li><br> <li>Second item</li><br> <li>Third item</li> </ul> |

*****

# Images <a id="images"></a>
[Back to Top](#top)<br>
To add an image, add an exclamation mark (`!`), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.
<br>
***Syntax***<br>
`![alt text](image.jpg)`
<br>

***Markdown***<br>
`![The San Juan Mountains are beautiful](https://i0.wp.com/sjma.org/wp-content/uploads/2018/04/Ice-Lakes-BG.jpg?fit=1920%2C1080&ssl=1)` Or
`<img src="https://i0.wp.com/sjma.org/wp-content/uploads/2018/04/Ice-Lakes-BG.jpg?fit=1920%2C1080&ssl=1">`
<br>

***Output***<br>
![The San Juan Mountains](https://i0.wp.com/sjma.org/wp-content/uploads/2018/04/Ice-Lakes-BG.jpg?fit=1920%2C1080&ssl=1)

*****

# Code <a id="code"></a>
[Back to Top](#top)<br>
To denote a word or phrase as code, enclose it in backticks `( ` )`. Not quotation marks `( ' )` or `( " )`.
| Markdown                                | HTML                                             | Output                              |
|-----------------------------------------|--------------------------------------------------|-------------------------------------|
| ``At the command prompt, type `nano`.`` | `At the command prompt, type <code>nano</code>.` | At the command prompt, type `nano`. |
<br>

## Escaping Backticks
If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).
| Markdown                              | HTML                                  | Output                                |
|---------------------------------------|---------------------------------------|---------------------------------------|
| ``Use `code` in your Markdown file.`` | ``Use `code` in your Markdown file.`` | ``Use `code` in your Markdown file.`` |
*****

# Horizontal Rules (hr)<a id="hr"></a>
[Back to Top](#top)<br>
To create a horizontal rule use 3 or more asterisks (*) or dashes (-) or underscores (_).<br>
***Markdown***<br>
`***`<br>
`---`<br>
`___`<br>

***HTML***<br>
`<hr>`<br>

***Output***
***

<br><br>

*****

# Links <a id="links"></a>
[Back to Top](#top)<br>
To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`). You can optionally add a title after the URL in the parentheses.

*****

# Tables <a id="tables"></a>
[Back to Top](#top)<br>
To create a table, use 3 or more hyphen(-) to make a column header, and use pipe(|) to separate each column.
***Markdown*** <br>
`| header 01 | header 02 |`<br>
`|-----------|-----------|`<br>
`| something | something |`<br>

***HTML*** <br>
&lt;table&gt;<br>
    &lt;tr&gt;<br>
        &lt;th&gt;header 01
        &lt;/th&gt;<br>
        &lt;th&gt;header 02
        &lt;/th&gt;<br>
    &lt;/tr&gt;<br>
    &lt;tr&gt;<br>
        &lt;td&gt;something
        &lt;/td&gt;<br>
        &lt;td&gt;something
        &lt;/td&gt;<br>
    &lt;/tr&gt;<br>

***Output***
| header 01 | header 02 |
|-----------|-----------|
| something | something |


Cells' widths can be vary, as shown below. The output will be the same.<br>
`| header 01 | header 02 |`<br>
`|---|----------------|`<br>
`| lorem ipsum | something |`<br>

*****

# Others <a id="others"></a>
[Back to Top](#top)

*****
