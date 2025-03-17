---
layout: single
title:  "The quarterly review — Q4"
date:   2018-01-10 12:00:00 -0000
categories: grad_school
tags: [grad_school, journal]
---

This post too is late. I’ve been putting off this post for a while. I could be content in not reviewing the bygone quarter, and welcome the dull winter that has set its foot in San Diego. But, it doesn’t feel right to begin a new quarter without reviewing the previous one. So here it goes, as I leisurely enjoy a rare unburdened start to the new quarter.

Fall was a beautiful quarter! I finally started on my Master’s thesis. I also took a research class in recommender systems — CSE 291-Trends in Recommender Systems and Human Behavioral Modeling. I was a teaching assistant for a graduate class on design and analysis of algorithms (CSE 202). Needless to say, the quarter went by in a thrice. I remember vaguely writing down the following words on Instagram:

> A blurry tenth week sets its foot,
> as you ponder on the nine weeks
> That flew past you.
> Blur. It was."

Blur, indeed! Here’s how the final week went: I submitted a research paper on our work for the research class. I updated my professor on my progress in research leading to my Master’s thesis. I spent the last two days grading CSE 202 continuously. Then I rushed to Los Angeles to catch my flight to India, my home!

It was a quarter of learning. I am working on using metric embeddings for sequential recommendation. For my master’s thesis, I am working with the TransRec model, which uses a unified space to model interactions between users, current item and the next item of the user. I hope to extend this model and compare with other recent techniques in metric embedding. This work finally pushed me to use TensorFlow. I don’t like it much, despite being blown away by the speed. C++ is faster. :) TF is faster to prototype than python for machine learning especially when I don’t have to explicitly code the gradient updates.

For my research class, we worked on using metric embeddings for next song recommendation. We demonstrated the effectiveness of using the Personalized Ranking Metric Embedding (PRME) model on user’s listening history in two datasets — Now Playing and 30Music. We extended the PRME model on two counts — personalizing the tradeoff parameter between user preference space and sequential space, and including social regularization to improve the model performance. We visualized our model and demonstrated that the model was indeed putting songs from same (and also similar) artists closer in the sequential space.

The research class was primarily involved in discussing work in human behavioral modeling in recent years. It was a great learning experience to review and discuss work in different areas — text and question answering systems, deep learning, geographically-aware systems and social models. While I loved reading the papers, I did feel overwhelmed with the sheer number of them. My objective was to at least read and critically evaluate 6 of 10 papers per week. I can say I managed doing that in most weeks, except the final two weeks.

TA-ing CSE 202 was a massive test in how effectively I can evaluate 200 solutions to one algorithmic question. I took 26 hours to grade one such homework. It was deeply rewarding to see different approaches taken by students. We did feel there was a lack of manpower, with only 5 TAs to evaluate 200*5 solutions per homework. In the last few days of the quarter, I fully expected to take the grading onto my flight. Thankfully, spending two nights with barely any sleep meant I finished grading in time.

Overall, I sincerely wished my research was funded as I didn’t want to spend a a hell lot of time on TA work, despite loving it. It only meant time lost on research work. I liked the discussions in the research class, as we stripped down a few papers to being unnecessarily complex, or being clever! It was nice to think of the limitations of the papers and how we can extend them. This quarter, I hope to put some much required speed into my research. All in all, it’s been a good end to the year.

