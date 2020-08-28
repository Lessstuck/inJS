#include <stdio.h>

// Function to swap the elements
void swap_elements(int *first, int *second)
{
    int temp = *first;
    *first = *second;
    *second = temp;
}

// In partition function l represents low and h represents high
int partition_function(int arr[], int l, int h)
{
    int p = arr[h];  // pivot is the last element
    int i = (l - 1); // Index of smaller element

    for (int j = l; j <= h - 1; j++)
    {
        // If current element is smaller than the pivot
        if (arr[j] < p)
        {
            i++;
            swap_elements(&arr[i], &arr[j]); // swapping the elements
        }
    }
    swap_elements(&arr[i + 1], &arr[h]);
    return (i + 1);
}

void quick_sort(int arr[], int l, int h)
{
    if (l < h)
    {
        int p_index = partition_function(arr, l, h);
        quick_sort(arr, l, p_index - 1);
        quick_sort(arr, p_index + 1, h);
    }
}

//Function to print the elements of the array
void print_Array(int arr[], int len)
{
    int i;
    for (i = 0; i < len; i++)
        printf("%d ", arr[i]);
}

// Main Function or driver function
int main()
{
    int array[] = {14, 17, 8, 90, 11, 2};          //Static array
    int length = sizeof(array) / sizeof(array[0]); //For finding the length of the array
    printf("Before Sorting the array: ");
    print_Array(array, length);
    printf("\n");
    printf("After Sorting the array: ");
    //Indexing starts from 0(zero) in array (that is why length-1)
    quick_sort(array, 0, length - 1);
    print_Array(array, length);
    return 0;
}