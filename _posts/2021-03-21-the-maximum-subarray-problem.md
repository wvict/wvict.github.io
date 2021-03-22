---
title: 'The maximum subarray problem'
layout: 'post'
permalink: '/blog/:title'
---
The [maximum subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem) is a classic problem in computer science and can be solved using a variety of algorithmic techniques. Among these techniques are *brute force*, *divide and conquer*, *dynamic programming*, and others. The goal is to find a contiguous subarray with the largest sum within a given one-dimensional array $[a_1, a_2,..., a_n]$ of numbers.

The main objective of this article is to present diferent algorithms with diferent time complexities which constitute a solution for this problem.


### An initial brute force solution with $\Theta (n^3)$

What are all the possible contiguous sequences? Let $v$ be an array containing a sequence of integers. Then, the possible sequences are all the subarrays $v[i:j]$ such that $0 \leq i \leq j < n$.

A brute force algorithm would be to go over all the possible subsequences and for each one calculate their sum, returning the greatest sum possible in the end. Let's suppose we have the array $v$. Then one way to implement this would be:

```java
int maximumSubarray(int[] v){
    int maxSum = v[0];
    for(int i=0;i<v.length;i++){
        for(int j=i;j<v.length;j++){
            int sum = 0;
            for(int k=i;k<=j;k++)
                sum+=v[k];
            if(sum>maxSum) maxSum = sum;
        }  
    }
    return maxSum;
}
```

### Improving the solution to $\Theta (n^2)$

Intuitively, looking at the previous code you can see that in each sum we are repeating a lot of calculations. When we go from calculating $sum(v[i:j])$ to $sum(v[i:j+1])$ we don't need to recalculate everything again. In other words, $sum(v[i:j+1]) = sum(v[i:j]) + v[j+1])$. With that we can remove the third loop we had before:

```java
int maximumSubarray(int[] v){
    int maxSum = v[0];
    for(int i=0;i<v.length;i++){
        int sum = v[i];
        for(int j=i;j<v.length;j++){
            if(j!=i) sum+=v[j];
            if(sum>maxSum) maxSum = sum;
        }  
    }
    return maxSum;
}
```

### Improving even more to $\Theta (n)$

A quadratic solution is still not enough for us :). To get to the linear solution, we need to use [*Kadane's algorithm*](https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm). Let's consider an array $best$ with the same length as $v$. Then, $best[i]$ represents the subarray with maximum sum which ends at position $i$. It's easy to see that $best[0] = v[0]$. If we know $best[i]$, how can we calculate $best[i+1]$? 

Let's go over an example. Imagine our array $v$ is $v = [4, -2, 1, 5]$. Then, 

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |4   |-2 |1  |5  |
|$best[i]$|    |   |   |   |

Now, we know that the best sum up until position $0$ of $v$ is of course $v[0] = 4$. So we have

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |4   |-2 |1  |5  |
|$best[i]$|4   |   |   |   |

Now want to calculate $best[1]$. What we are trying to find is the greatest sum of contiguous elements in $v$ up until position 1. But this value is the current value of $v$ plus the greatest sum up until the previous position. In other words, $best[1] = best[0] + v[1] = 4 + (-2) = 2$. This means 2 is the greatest sum of contiguous elements up until position 1 on array $v$. Then,

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |4   |-2 |1  |5  |
|$best[i]$|4   |2  |   |   |

For $best[2]$ we do the same thing: the maximum sum up until $i = 2$ on array $v$ is simply $best[1] + v[2]$. In this case, $best[2] = best[1] + v[2] = 2 + 1 = 3$. 

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |4   |-2 |1  |5  |
|$best[i]$|4   |2  |3  |   |

And at last, $best[3] = best[2] + v[3] = 3 + 5 = 8$.

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |4   |-2 |1  |5  |
|$best[i]$|4   |2  |3  |8  |

By now you probably noticed the pattern. To fill out the $best$ array, we say that $best[0] = v[0]$ and that $best[i] = best[i-1] + v[i]$. Then, the maximum subarray sum of contiguous elements is found by obtaining the greatest element of the array $best$. In our case, this value is 8.

But there is a catch. What if $best[i]$ is a negative number? Let's use another example with $v = [-5, 2, -3, 4]$. As usual, $best[0] = v[0] = -5$.

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |-5  |2  |-3 |4  |
|$best[i]$|-5  |   |   |   |

Now, what is the greatest sum of contiguous elements of $v$ up position 1? If we try to do the samething as before by summing $best[0] + v[1]$, we get $best[1] = -3$. But that's wrong, since $v[1]$ alone is greater than -3. So in this case, $best[1] = 2$. That means that if $best[i-1] < 0$, we don't sum it with $v[i]$ but leave it as it is. Continuing with our example,

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |-5  |2  |-3 |4  |
|$best[i]$|-5  |2  |   |   |

Now, the best sum up to position $2$ is $best[1] + v[2] = 2 + (-3) = -1$.

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |-5  |2  |-3 |4  |
|$best[i]$|-5  |2  |-1 |   |

Again, $best[2]$ is also negative. Therefore, the greatest sum on $v$ up until position $3$ is $v[3] = 4$.

| i       | 0  | 1 | 2 | 3 |
|---------|----|---|---|---|
|$v[i]$   |-5  |2  |-3 |4  |
|$best[i]$|-5  |2  |-1 |4  |

And the maximum sum of contiguous elements in v is $max(best) = 4$.

And this is Kadane's algorithm:

$$
    best[0] = v[0]
$$

$$ best[i] = 
    \begin{cases}
        best[i-1] + v[i],  & \text{if } best[i] > 0\\
        v[i],              & \text{if } best[i] < 0
    \end{cases}
$$

Let's implement this idea in Java:

```java
int maximumSubarray(int[] v){
    int[] best = new int[v.length];
    best[0] = v[0];
    for(int i=1;i<v.length;i++){//O(n)
        //if positive, add sequence item to sum
        if(best[i-1]>0){
            best[i] = best[i-1] + v[i];
        }
        //if negative, the sum is less then sequence item, so don't add
        else{
            best[i] = v[i];
        }
    }
    //initially assume the max sum is the first int on array best
    int maxSum = best[0];
    for(int i=1;i<best.length;i++){//O(n)
        if(best[i]>maxSum) maxSum=best[i];
    }
    return maxSum;
}
```
Since we only traverse the array $v$ once to fill in the $best$ array and then loop through it to find its greatest element, we end up with a linear complexity $O(n + n) = O(2n) = O(n)$, where $n$ is the length of the array $v$. 

Hopefully after these examples you gained a more detail perception on the maximum subarray problem as well as with using different ideas to decrease the time complexities of algorithms.

