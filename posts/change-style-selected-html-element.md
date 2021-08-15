---
title: Changing the styles of selected HTML element
author: Sandeep Sihari
category: javascript
permalink: /change-style-selected-html-element/
tags: javascript programming
date: "2017-11-08"
---

## Step 1: Select the HTML element

**Syntax**

<pre class="line-numbers language-javascript">
    <code>
    document.querySelector('selector here');
    </code>
</pre>

<p class="text-center">Or to select multiple element at once.</p>

<pre class="line-numbers language-javascript">
    <code>
    document.querySelectorAll('selector here');
    </code>
</pre>

<p><b>Example</b></p>

<pre class="line-numbers language-javascript">
    <code>
    // select by id name
    var obj = document.querySelector('#myPara');
    </code>
</pre>

<h2>Step 2: Use <q>style</q> attribute to change the style.</h2>
<p><b>Example</b></p>

<pre class="line-numbers language-javascript">
    <code>
    obj.style.color = 'red';
    obj.style.border = '5px solid green';
    </code>
</pre>

<p class="text-center"><b>Note:</b> when using CSS properties from JS - <br />
    <ul>
        <li>Remove the <b>hyphen (-)</b> sign.</li>
        <li>Capitalize the word after <b>hyphen (-)</b> sign.</li>
    </ul>
</p>

<p><b>Example</b></p>

<pre class="line-numbers language-javascript">
    <code>
    // background-color property will be used as
    obj.style.backgroundColor = 'blue';
    obj.style.paddingTop = '5px';
    </code>
</pre>