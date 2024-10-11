#!/usr/bin/env python3
"""
type annotation for to_kv function
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int | float]) -> Tuple[str, float]:
    """
    to_kv function that takes a string k and an int OR float v as arguments and returns a tuple.
    The first element of the tuple is the string k. The second element is the square of the int/float v.
    """
    return (k, v * v)
