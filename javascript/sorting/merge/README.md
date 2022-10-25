# Insertion Sort

Merge sort is an algorithm that splits an array in half and keeps doing so until each element is isolated, then puts them back together in the properly sorted order.

## Psuedocode

``` psuedocode
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Sample Step-Through

![Step-Through for merge sort](./merge-sort.png)

## Efficiency

Time: O(n * log n)

- At each merge, the algorithm is effectively iterating through the entire array; the algorithm requires a number of merges equal to the log base 2 of the number of elements in the array. The time does not change for best-case or worst-case scenarios.

Space: O(n)

- The algorithm is recursively creating sub-arrays, but because of the way the call stack works, each element is effectively only present in one sub-array at a time.
