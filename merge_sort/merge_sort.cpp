#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int> &left, vector<int> &right, vector<int> &arr) {

  int i = 0, l = 0, r = 0;

  while (l < left.size() && r < right.size()) {

    if (left[l] < right[r])
      arr[i++] = left[l++];
    else
      arr[i++] = right[r++];
  }

  while (l < left.size())
    arr[i++] = left[l++];

  while (r < right.size())
    arr[i++] = right[r++];
}

void merge_sort(vector<int> &arr) {

  const int len = arr.size();

  if (len <= 1)
    return;

  const int m = len / 2;

  vector<int> left;

  for (int i = 0; i < m; i++)
    left.push_back(arr[i]);

  merge_sort(left);

  vector<int> right;
  for (int i = m; i < len; i++)
    right.push_back(arr[i]);

  merge_sort(right);

  merge(left, right, arr);
}

int main() {
  vector<int> arr;

  arr.push_back(10);
  arr.push_back(30);
  arr.push_back(10000000);
  arr.push_back(30);
  arr.push_back(100);
  arr.push_back(20);
  arr.push_back(1);

  merge_sort(arr);

  for (const int n : arr)
    cout << n << ' ';
}
