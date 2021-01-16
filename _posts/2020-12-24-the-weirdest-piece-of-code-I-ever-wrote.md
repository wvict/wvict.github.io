---
title: 'The weirdest piece of code I ever wrote'
layout: 'post'
permalink: '/blog/:title'
---
This is by far the weirdest code I ever wrote. Well, at least it was intentional: I made sure it was as bad as it could be since I wanted to write a solution to a problem using the smallest program possible (size wise). So readibility was not at all the goal here! And the resulting code solved the problem using $589$ bytes!
  
I had a lot of fun doing this though. Anyways, here is the code (it was written in C++):
```c++
#include <iostream>
#define f(v,l) for(int v=1;v<=l;v++)
#define z(a,b) if(i>=a&&i<=b)
#define x(a,s) if(j==m-(a)||j==m+a)t[j]=s
using namespace std;
int main(){int w=29;int h=28;int m=w/2;int o,p,q;o=p=q=0;f(i,h){char t[w+1];
fill(t,t+w+1,'_');f(j,w){z(2,9)x(o,'*');z(9,14)x(p+1,'*');z(15,22)x(q+1,'*');
z(11,22)x(q,'o');z(2,8){x(o-1,'o');z(8,8)x(p+2,'o');}z(6,14){x(p,'o');
z(14,14)x(q+2,'o');}z(22,22)if(j>=4&&j<=23&&j%2!=0)t[j]='o';}z(0,h)o++;
z(6,h)p++;z(11,h)q++;z(0,2)t[m]='*';z(28,28)t[m-1]=t[m]=t[m+1]='o';
z(23,h)t[m-1]=t[m+1]='o';char s[w+2];f(k,w+1)s[k-1]=t[k];printf("%s\n",s);}}

``` 
You can compile it yourself and see what it does :D. Merry Christmas and happy holidays!

