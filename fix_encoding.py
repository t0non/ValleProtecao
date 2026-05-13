# -*- coding: utf-8 -*-
import re

with open('index.html', 'rb') as f:
    raw = f.read()

# Try to decode as latin-1 first, then re-encode as utf-8
# This fixes the double-encoding issue
try:
    content = raw.decode('utf-8')
    
    # Fix common double-encoded sequences (utf-8 bytes read as latin-1, then encoded again)
    fixes = [
        ('\u00c3\u00a7\u00c3\u00a3', '\u00e7\u00e3'),  # cao
        ('\u00c3\u00a7', '\u00e7'),  # c cedilla
        ('\u00c3\u00a3', '\u00e3'),  # a tilde
        ('\u00c3\u00a9', '\u00e9'),  # e acute
        ('\u00c3\u00a1', '\u00e1'),  # a acute
        ('\u00c3\u00ad', '\u00ed'),  # i acute
        ('\u00c3\u00b3', '\u00f3'),  # o acute
        ('\u00c3\u00ba', '\u00fa'),  # u acute
        ('\u00c3\u00b5', '\u00f5'),  # o tilde
        ('\u00c3\u00a2', '\u00e2'),  # a circumflex
        ('\u00c3\u00aa', '\u00ea'),  # e circumflex
        ('\u00c3\u00b4', '\u00f4'),  # o circumflex
        ('\u00c3\u00bf', '\u00ff'),  
        ('\u00c3\u0087', '\u00c7'),  # C cedilla
        ('\u00c3\u0089', '\u00c9'),  # E acute cap
        ('\u00c3\u0081', '\u00c1'),  # A acute cap
        ('\u00c3\u009c', '\u00dc'),  # U umlaut cap
        ('\u00c3\u00b1', '\u00f1'),  # n tilde
        ('\u00c3\u00a0', '\u00e0'),  # a grave
    ]
    
    count = 0
    for bad, good in fixes:
        n = content.count(bad)
        if n > 0:
            content = content.replace(bad, good)
            print(f"Fixed {n}x: {repr(bad)} -> {repr(good)}")
            count += n
    
    print(f"\nTotal fixes: {count}")
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Saved successfully!")

except Exception as e:
    print(f"Error: {e}")
