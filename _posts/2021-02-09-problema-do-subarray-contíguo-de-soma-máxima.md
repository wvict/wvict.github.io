---
title: 'Problema do subarray contíguo de soma máxima'
layout: 'post'
permalink: '/blog/:title'
---
Em ciência dos computadores, o [_problema do subarray contíguo de soma máxima_](https://en.wikipedia.org/wiki/Maximum_subarray_problem) é um problema clássico e pode ser resolvido utilizando várias tecnicas de algoritmos, incluindo-se nestas o *brute force*, *divide and conquer*, *dynamic programming* e outras.

O objectivo deste exercício é ter algoritmos de diferentes complexidades para um mesmo problema e ir verificando a sua eficiência temporal.

### Uma primeira solução com força bruta com tempo $\Theta (n^3)$

Quais são todas as subsequências contíguas possíveis? Seja $v[]$ um array contendo a sequência e começado na posição 0. As sequências possíveis são então todos os subarrays $v[i..j]$ tal que  $0 \leq i \leq j \leq n$.

Uma solução exaustiva seria passar por todas estas subsequências e para cada uma delas calcular o valor da respectiva soma, escolhendo a melhor possível. Supondo que já temos a leitura feita para o array v[], uma maneira de fazer isto seria a indicada pelo código seguinte:

```java
int maxSum = s[0];
for(int i=0;i<s.length;i++){
    for(int j=i;j<s.length;j++){
        int sum = 0;
        for(int k=i;k<=j;k++)
            sum+=s[k];
        if(sum>maxSum) maxSum = sum;
    }  
}
System.out.println(maxSum);
```

### Melhorando a solução para $\Theta (n^2)$

Intuitivamente, olhando para o código anterior podemos notar que em cada soma estamos a repetir muitos cálculos. Quando passamos do cálculo de soma(v[i..j]) para soma(v[i..j+1]) não precisamos de voltar a recalcular tudo (começando novamente em i, e basta-nos adicionar v[j+1] à soma anterior!

Dito de outro modo, soma(v[i..j+1]) = soma(v[i..j]) + v[j+1]. Podemos utilizar isto para remover o terceiro ciclo com k que tínhamos na solução anterior.

```java
int maxSum = s[0];
for(int i=0;i<s.length;i++){
    int sum = s[i];
    for(int j=i;j<s.length;j++){
        if(j!=i)
        sum+=s[j];
    if(sum>maxSum) maxSum = sum;
    }  
}
System.out.println(maxSum);
```

### Melhorando ainda mais para $\Theta (n)$

Uma solução quadrática ainda não é suficiente e temos de a melhorar para tempo linear. Para isso vamos usar o [*algoritmo de Kadane*](https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane%27s_algorithm_%28Algorithm_3:_Dynamic_Programming%29).

Considere que best(i) representa o melhor subarray que termina na posição i. Sabemos como "caso base" que best(0) = v[0] (é o único subarray possível que termina na primeira posição).

Se soubermos o valor de best(i), como calcular o valor de best(i+1)? 

![Descrição do algorítimo de Kadane](https://imgur.com/KsIAYAU.png)

Uma solução, utilizando o algorítimo de Kadane, é:

```java
int[] best = new int[s.length];
best[0] = s[0];//base case
for(int i=1;i<s.length;i++){
    if(best[i-1]>0)//if positive, add sequence item to sum
        best[i] = best[i-1]+s[i];
    else //if negative, the sum is less then sequence item, so don't add
        best[i] = s[i];
}
int maxSum = best[0];//initially assume the max sum is the first int on array best
for(int i=1;i<best.length;i++){
    if(best[i]>maxSum) maxSum=best[i];
}
System.out.println(maxSum);
```

No final de tudo, o melhor subarray é o melhor valor de $best(i)$ para um qualquer $i$ (o melhor pode terminar em qualquer posição).

Para calcular isto basta-nos percorrer uma única vez o array v[] e em cada iteração calcular em tempo constante o valor da melhor soma a terminar na posição actual usando a melhor soma a terminar na posição anterior. A complexidade temporal fica portanto linear. 
