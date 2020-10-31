---
layout: page
title: Covid-19 tables/graphs generator
permalink: /projects/covid-graph-generator
---
**Repo**: [github.com/w3slley/covid19-portugal-wikipedia](https://github.com/w3slley/covid19-portugal-wikipedia)

**Technologies used**: Python, pdfminer, pandas, matplotlib

This project has the goal of automating the process of updating tables and graphs on the Portugal's Covid-19 pandemic Wikipedia page. In uncertain times like these the internet often becomes a "jungle" of misinformation. Collaborating with other people to share accurate and updated information from trusted national health authorities is my attempt to help make the internet a better place.

The developed Python script parses the Direção Geral de Saúde's website and gets from the PDF reports all the necessary information to produce/update graphs and tables on the Portugal Covid-19 Wikipedia Page. To extract the data from the PDF file I used [pdfminer](https://github.com/euske/pdfminer). The data is then saved into a .csv file and later used for the creation of the charts and tables. These are now ready to be inserted into the `edit section` on the Wikipedia page. More information about the process of contributing to the Wikipedia page (both in english and in portuguese) can be obtained in the github repository.

# Example of charts

![](https://raw.githubusercontent.com/w3slley/covid19-portugal-wikipedia/master/images/summary.png)

![](https://raw.githubusercontent.com/w3slley/covid19-portugal-wikipedia/master/images/daily_cases.png)

![](https://raw.githubusercontent.com/w3slley/covid19-portugal-wikipedia/master/images/cases_age_gender.png)

![](https://raw.githubusercontent.com/w3slley/covid19-portugal-wikipedia/master/images/hospital_admitted.png)

![](https://raw.githubusercontent.com/w3slley/covid19-portugal-wikipedia/master/images/total_recoveries.png)
