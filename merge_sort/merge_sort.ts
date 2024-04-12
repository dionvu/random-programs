function merge_sort(arr: number[]) {

  const len = arr.length;

  // Arr of one element is already sorted
  if (len <= 1) return;

  // Arr is more than 1 element means we need to sort
  const mid = Math.floor(len / 2);

  // Sort the left half
  const left: number[] = [];
  for (let i = 0; i < mid; i++)
    left.push(arr[i]);

  merge_sort(left);

  // Sort the right half
  const right: number[] = [];
  for (let i = mid; i < len; i++)
    right.push(arr[i]);

  merge_sort(right);

  // Merge the two halfs
  merge(left, right, arr);
}

function merge(left: number[], right: number[], arr: number[]) {
  let i = 0, l = 0, r = 0;
  const l_len = left.length;
  const r_len = right.length;

  while (l < l_len && r < r_len) {
    if (left[l] < right[r]) {
      arr[i++] = left[l++];
    } else {
      arr[i++] = right[r++];
    }
  }

  while (l < l_len) {
    arr[i++] = left[l++];
  }

  while (r < r_len) {
    arr[i++] = right[r++];
  }
}

const arr1 = [1, 43, 10, 23, 3, 120, 12, 32, 54];
merge_sort(arr1);

for (const n of arr1) {
  console.log(n);
}
