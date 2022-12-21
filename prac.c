#include<stdio.h>

void main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d",&n);
    char str[n];

    for (int i = 0; i < n; i++)
    {
        gets(str[i]);
    }
    for (int i = 0; i < n; i++)
    {
        puts(str[i]);
    }
    
    
}