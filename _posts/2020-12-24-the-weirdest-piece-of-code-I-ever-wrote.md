---
title: 'The weirdest piece of code I ever wrote'
layout: 'post'
permalink: '/blog/:title'
---
This is by far the worse (and weirdest) code I ever wrote. Thankfully, it was intentional: I made sure it was as bad as it could be since I wanted to write a solution to a problem using the smallest program possible (size wise). This one did it using $733$ bytes! I had a lot of fun doing this though. 
Anyways, here it is (it was written in C++):
```c++
#include <iostream>
#define X std::string
#define D int
#define f(u,v) for(D u=1;u<=v;u++)
#define o(z,y) if(j==m-(z)||j==m+z)t[j]=y
#define r(z,y) if(j>=m-(z)&&j<=m+z)t[j]=y
#define t(k,z,x) if(i==k && (j==m-(z)||j==m+z))t[j]=x
#define y(k,z,x) if(i==k && (j>=m-(z)&&j<=m+z))t[j]=x
#define T(p,d) if(i>=p) d++
#define W(a,b) if(i>=a&&i<=b)
#define O(s,r) if(i s r)
D main(){D w=29; D h=28; D m=w/2; D f,u,l; f=u=l=0;f(i,h){
char t[w+1];f(j,w){t[j]='_';if(i>=23){o(1,'o');y(28,1,'o');
}else{W(2,9)o(f,'*');W(2,8){o(f-1,'o');t(8,u+2,'o');}O(<=,2)r(f,'*');
W(6,14){o(u,'o');t(14,l+2,'o');}W(9,14)o(u+1,'*');O(>=,15) o(l+1,'*');
O(>=,11)o(l,'o');if(j%2!=0)y(22,m-4,'o');}}f++;T(6,u);T(11,l);X s="";
f(k,w)s+=t[k];printf("%s\n",s.c_str());}}

``` 
You can compile yourself and see what it does :D. Merry Christmas and happy holidays!

