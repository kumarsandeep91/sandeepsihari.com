---
title: C++ type casting
author: Sandeep Sihari
category: cpp
permalink: /cpp-type-casting/
tags: cpp programming
date: "2017-11-13"
---

<h2>C++ type casting</h2>
<p>
    <b>Type Casting</b> refers tp as converting one data type into another data types. Some data conversions are <b>not possible</b> while some are <b>possible</b> but result in <b>data loss.</b>
</p>

<h3>Potential type casting problems</h3>
<div class="table-responsive">
    <table class="table table-bordered">
        <tbody>
            <tr>
                <th><b>Conversion</b></th>
                <th><b>Potential Issues</b></th>
            </tr>
            <tr>
                <td>Large floating point type to small floating point type</td>
                <td>Loss of precision and/or the starting value might be out of range for the new type</td>
            </tr>
            <tr>
                <td>Floating point type to integer type</td>
                <td>Loss of the fractional component of the floating point type and/or out of range</td>
            </tr>
            <tr>
                <td>Bigger integer type to smaller integer type</td>
                <td>Starting value may be out of range for the new type</td>
            </tr>
        </tbody>
    </table>
</div>

<p>
    This table only deals with numeric data type conversions. There are other conversion types such as from <b>character to numeric or numeric to character</b>, or among character types. C++ also uses the boolean type that represents true or false. If you assign a zero value to a bool variable, it will be converted to false. Any non-zero value is converted to true.
</p>

<h3>Different type castings</h3>
<ul>
    <li>Implicit Casting: Performs automatically by C++.</li>
    <li>Explicit Casting: Performs by the user.</li>
</ul>

<h4>Implicit Casting</h4>
<pre class="line-numbers language-cpp">
<code>
    // smaller(int) data type to larger data type(long)
    int x = 100;
    long y;
    y = x;
    cout << y << endl;
</code>
</pre>
<p><b>Output</b></p>
<pre class="language-bash">
<code>
    $ 100
    $ 
</code>
</pre>

<pre class="line-numbers language-cpp">
<code>
    // character to numeric conversion
    char ch = 'S';
    int i;
    i = ch;
    cout << i << endl;
</code>
</pre>
<p><b>Output</b></p>
<pre class="language-bash">
<code>
    $ 83
    $ 
</code>
</pre>

<pre class="line-numbers language-cpp">
<code>
    // numeric to character conversion
    int i = 65;
    char ch;
    ch = i;
    cout << ch << endl;
</code>
</pre>
<p><b>Output</b></p>
<pre class="language-bash">
<code>
    $ A
    $ 
</code>
</pre>

<pre class="line-numbers language-cpp">
<code>
    // numeric to boolean conversion
    int i = 65, j = 0;
    bool b = i;
    bool c = j;
    cout << "b is " << b << endl;
    cout << "c is " << c << endl;
</code>
</pre>
<p><b>Output</b></p>
<pre class="language-bash">
<code>
    $ b is true
    $ c is false
    $
</code>
</pre>

<h4>Explicit Casting</h4>
<p><b>Method 1</b></p>
<pre class="line-numbers language-cpp">
<code>
    char ch = 'A', x = 'a';
    int i, j;
    // casting statement. character to int.
    i = (int) ch;
    cout << "i is " << i << endl;
    
    // or you can also do this
    j = int(x);
    cout << "j is " << j << endl;
</code>
</pre>
<p><b>Output</b></p>
<pre class="language-bash">
<code>
    $ i is 65
    $ j is 97
    $
</code>
</pre>

<p><b>Method 2: using static_cast&lt;type&gt;</b></p>
<pre class="line-numbers language-cpp">
<code>
    char ch;
    int i = 65;
    ch = static_cast<char>(i);   // int to char
    cout << "ch is " << ch << endl;
</code>
</pre>
<p><b>Output</b></p>
<pre class="language-bash">
<code>
    $ ch is A
    $
</code>
</pre>
