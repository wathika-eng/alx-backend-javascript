#!/usr/bin/env python3

"""
Duck typing an iterable object
"""

from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Element length function that takes a list lst of strings and returns a list of tuples where each tuple contains a string and an integer.
    """
    return [(i, len(i)) for i in lst]
