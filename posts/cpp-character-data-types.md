---
title: C++ Character data types.
author: Sandeep Sihari
category: cpp
permalink: /cpp-character-data-types/
tags: cpp programming
date: "2017-11-12"
---

<h2>C++ Character data types</h2>

<p>
    C++ contains data types to store character values. Although character data is represented as nueric data under the cover.
    <br />
    For internationalization purposes, the <b>wchar_t</b> type is used which expands on the numeric values available to represent character sets from various languages found around the world.
</p>

<p><b>Note: The type names that start with a __ character are considered non-standard types.</b></p>

<div class="table-responsive">
    <table class="table table-bordered">
        <tbody>
            <tr>
                <th align="center"><b>Type Name</b></th>
                <th align="center"><b>Bytes</b></th>
                <th align="center"><b>Alias</b></th>
                <th align="center"><b>Range</b></th>
            </tr>
            <tr>
                <td align="center">char</td>
                <td align="center">1</td>
                <td align="center">none</td>
                <td align="center">–128 to 127 by default 0 to 255 when compiled by using /J</td>
            </tr>
            <tr>
                <td align="center">signed char</td>
                <td align="center">1</td>
                <td align="center">none</td>
                <td align="center">-128 to 127</td>
            </tr>
            <tr>
                <td align="center">unsigned char</td>
                <td align="center">1</td>
                <td align="center">none</td>
                <td align="center">0 to 255</td>
            </tr>
            <tr>
                <td align="center">wchar_t, char16_t, and char32_t</td>
                <td align="center">2 or 4</td>
                <td align="center">__wchar_t</td>
                <td align="center">0 to 65,535 (wchar_t &amp; char16_t), 0 to 4,294,967,295 (char32_t)</td>
            </tr>
        </tbody>
    </table>
</div>