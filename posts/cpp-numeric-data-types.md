---
title: C++ Numeric data types.
author: Sandeep Sihari
category: cpp
permalink: /cpp-numeric-data-types/
tags: cpp programming
date: "2017-11-12"
---

<h2>C++ Numeric data types</h2>

<p>
    C++ contains data types to store numeric values. Its important to remember that these values are binary based (base 2) not decimal (base 10).
    <br />
    The byte representation of data types is given below in the table will give you a hint how the values are stored in the memory  and on disk.
</p>

<p><b>Note: The type names that start with a __ character are considered non-standard types.</b></p>

<div class="table-responsive">
    <table class="table table-bordered">
        <tbody>
            <tr>
                <th>Type Name</th>
                <th>Bytes</th>
                <th>Alias</th>
                <th>Range</th>
            </tr>
            <tr>
                <td align="center">int</td>
                <td align="center">4</td>
                <td align="center">signed</td>
                <td align="center">–2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td align="center">unsigned int</td>
                <td align="center">4</td>
                <td align="center">unsigned</td>
                <td align="center">0 to 4,294,967,295</td>
            </tr>
            <tr>
                <td align="center">__int8</td>
                <td align="center">1</td>
                <td align="center">char</td>
                <td align="center">-128 to 127</td>
            </tr>
            <tr>
                <td align="center">unsigned __int8</td>
                <td align="center">1</td>
                <td align="center">unsigned char</td>
                <td align="center">0 to 255</td>
            </tr>
            <tr>
                <td align="center">__int16</td>
                <td align="center">2</td>
                <td align="center">short, short int, signed short int</td>
                <td align="center">–32,768 to 32,767</td>
            </tr>
            <tr>
                <td align="center">unsigned __int16</td>
                <td align="center">2</td>
                <td align="center">unsigned short, unsigned short int</td>
                <td align="center">0 to 65,535</td>
            </tr>
            <tr>
                <td align="center">__int32</td>
                <td align="center">4</td>
                <td align="center">signed, signed int, int</td>
                <td align="center">–2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td align="center">unsigned __int32</td>
                <td align="center">4</td>
                <td align="center">unsigned, unsigned int</td>
                <td align="center">0 to 4,294,967,295</td>
            </tr>
            <tr>
                <td align="center">__int64</td>
                <td align="center">8</td>
                <td align="center">long long, signed long long</td>
                <td align="center">–9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
            </tr>
            <tr>
                <td align="center">unsigned __int64</td>
                <td align="center">8</td>
                <td align="center">unsigned long long</td>
                <td align="center">0 to 18,446,744,073,709,551,615</td>
            </tr>
            <tr>
                <td align="center">short</td>
                <td align="center">2</td>
                <td align="center">short int, signed short int</td>
                <td align="center">-32,768 to 32,767</td>
            </tr>
            <tr>
                <td align="center">unsigned short</td>
                <td align="center">2</td>
                <td align="center">unsigned short int</td>
                <td align="center">0 to 65,535</td>
            </tr>
            <tr>
                <td align="center">long</td>
                <td align="center">4</td>
                <td align="center">long int, signed long int</td>
                <td align="center">–2,147,483,648 to 2,147,483,647</td>
            </tr>
            <tr>
                <td align="center">unsigned long</td>
                <td align="center">4</td>
                <td align="center">unsigned long int</td>
                <td align="center">0 to 4,294,967,295</td>
            </tr>
            <tr>
                <td align="center">long long</td>
                <td align="center">8</td>
                <td align="center">none</td>
                <td align="center">–9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
            </tr>
            <tr>
                <td align="center">unsigned long long</td>
                <td align="center">8</td>
                <td align="center">none</td>
                <td align="center">0 to 18,446,744,073,709,551,615</td>
            </tr>
            <tr>
                <td align="center">float</td>
                <td align="center">4</td>
                <td align="center">none</td>
                <td align="center">3.4E +/- 38 (7 digits)</td>
            </tr>
            <tr>
                <td align="center">double</td>
                <td align="center">8</td>
                <td align="center">none</td>
                <td align="center">1.7E +/- 308 (15 digits)</td>
            </tr>
            <tr>
                <td align="center">long double</td>
                <td align="center">8</td>
                <td align="center">none</td>
                <td align="center">1.7E +/- 308 (15 digits)</td>
            </tr>
        </tbody>
    </table>
</div>